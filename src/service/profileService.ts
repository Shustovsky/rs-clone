import { child, Database, DatabaseReference, get, set } from '@firebase/database';
import { ProfileAuth } from '../model/ProfileAuth';
import { Profile } from '../model/Profile';
import { ref } from 'firebase/database';

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

    private convertProfileAuthToProfile(profileAuth: ProfileAuth): Profile {
        return new Profile(profileAuth.id, profileAuth.email);
    }
}
