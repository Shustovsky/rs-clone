import { child, Database, DatabaseReference, get, set, update } from '@firebase/database';
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

    public updateProfileWorkouts(id: string, workouts: ProfileWorkout[]): Promise<void> {
        const updates: { [index: string]: ProfileWorkout[] } = {};
        updates[`profiles/${id}/workouts`] = workouts;
        return update(ref(this.database), updates);
    }

    public async addProfileWorkout(id: string, workout: Workout): Promise<void> {
        const profile = await this.fetchProfile(id);
        const profileWorkout = this.convertWorkoutToProfileWorkout(workout);

        const profileWorkouts = profile.workouts || [];
        const existsWorkout = profileWorkouts
            .filter((workout1) => Date.parse(workout1.date) === this.createTodayDate().getTime())
            .find((workout1) => workout1.id === profileWorkout.id);
        if (existsWorkout) {
            existsWorkout.score += this.getScore(workout);
        } else {
            profileWorkouts.push(profileWorkout);
        }

        await this.updateProfileWorkouts(id, profileWorkouts);
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

    private getScore(workout: Workout) {
        return Math.round(workout.calories / 10);
    }

    private convertProfileAuthToProfile(profileAuth: ProfileAuth): Profile {
        return new Profile(profileAuth.id, profileAuth.email);
    }

    private createTodayDate(): Date {
        const date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
