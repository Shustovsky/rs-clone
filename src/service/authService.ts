import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, deleteUser } from 'firebase/auth';
import { User, UserCredential } from '@firebase/auth';

export class AuthService {
    public logIn(email: string, password: string): Promise<UserCredential> {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    public logOut(): Promise<void> {
        const auth = getAuth();
        return auth.signOut();
    }

    public signUp(email: string, password: string): Promise<UserCredential> {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password);
    }

    public deleteUser(): Promise<void> | undefined {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            return deleteUser(user);
        }
    }

    public getUserId(): string {
        const currentUser = <User>getAuth().currentUser;
        return currentUser.uid;
    }

    public isLoggedIn(): User | null {
        return getAuth().currentUser;
    }
}
