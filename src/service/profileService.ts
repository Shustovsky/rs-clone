import { child, Database, DatabaseReference, get, set, remove } from '@firebase/database';
import { ProfileAuth } from '../model/ProfileAuth';
import { Profile, ProfileWorkout } from '../model/Profile';
import { ref } from 'firebase/database';
import { Workout } from '../model/Workout';

export class ProfileService {
    private readonly dbRef: DatabaseReference;
    private readonly database: Database;

    constructor(dbRef: DatabaseReference, database: Database) {
        this.dbRef = dbRef;
        this.database = database;
    }

    public createProfile(profileAuth: ProfileAuth): Promise<void> {
        const profile = this.convertProfileAuthToProfile(profileAuth);
        return set(ref(this.database, `profiles/${profile.id}`), profile);
    }

    public fetchProfile(id: string): Promise<Profile> {
        return get(child(this.dbRef, `profiles/${id}`))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    return <Profile>snapshot.val();
                } else {
                    throw new Error('Profile not found');
                }
            })
            .catch((error) => {
                console.error(error);
                throw new Error(`Fetch profile ${id}, from DB failed.`);
            });
    }

    public getUserLocation(): Promise<string> {
        return fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                const ip = data.ip;
                return fetch(`https://ipapi.co/${ip}/json/`)
                    .then((response) => response.json())
                    .then((data) => {
                        return data.country_name;
                    });
            })
            .catch(() => '');
    }

    public updateProfile(existsProfile: Profile, profile: Profile): Promise<void> {
        const updatedProfile = this.mergeProfile(existsProfile, profile);
        return set(ref(this.database, `profiles/${existsProfile.id}`), updatedProfile);
    }

    public updateProfileWorkouts(id: string, workouts: ProfileWorkout[]): Promise<void> {
        return set(ref(this.database, `profiles/${id}/workouts`), workouts);
    }

    public async addProfileWorkout(id: string, workout: Workout): Promise<void> {
        const profile = await this.fetchProfile(id);
        const newProfileWorkout = this.convertWorkoutToProfileWorkout(workout);

        const profileWorkouts = profile.workouts || [];
        const existsWorkout = profileWorkouts
            .filter((profileWorkout) => Date.parse(profileWorkout.date) === this.createTodayDate().getTime())
            .find((profileWorkout) => profileWorkout.id === newProfileWorkout.id);
        if (existsWorkout) {
            existsWorkout.score += this.getScore(workout);
        } else {
            profileWorkouts.push(newProfileWorkout);
        }

        await this.updateProfileWorkouts(id, profileWorkouts);
    }

    public deleteProfile(id: string): Promise<void> {
        return remove(ref(this.database, `profiles/${id}`));
    }

    private convertWorkoutToProfileWorkout(workout: Workout): ProfileWorkout {
        return new ProfileWorkout(
            workout.id,
            this.createTodayDate().toISOString(),
            workout.title,
            workout.coverImageUrl,
            workout.description,
            workout.calories,
            workout.duration,
            this.getScore(workout)
        );
    }

    private getScore(workout: Workout): number {
        return Math.round(workout.calories / 10);
    }

    private convertProfileAuthToProfile(profileAuth: ProfileAuth): Profile {
        return new Profile(profileAuth.id, profileAuth.email, profileAuth.location);
    }

    private createTodayDate(): Date {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }

    private mergeProfile(existsProfile: Profile, profile: Profile) {
        existsProfile.location = profile.location;
        existsProfile.lastName = profile.lastName;
        existsProfile.firstName = profile.firstName;
        existsProfile.gender = profile.gender;
        existsProfile.birthday = profile.birthday;
        existsProfile.height = profile.height;
        existsProfile.weight = profile.weight;
        existsProfile.isEmailNotificationEnabled = profile.isEmailNotificationEnabled;
        existsProfile.isOffersNotificationEnabled = profile.isOffersNotificationEnabled;
        existsProfile.isPrivateOnlyMe = profile.isPrivateOnlyMe;
        return existsProfile;
    }
}
