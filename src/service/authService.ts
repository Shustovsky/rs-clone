import {
    EmailAuthProvider,
    User,
    UserCredential,
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    deleteUser,
    reauthenticateWithCredential,
} from 'firebase/auth';

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

    public deleteUser(): Promise<void> {
        const auth = getAuth();
        const user = <User>auth.currentUser;
        return deleteUser(user);
    }

    public reauthenticate(password: string): Promise<UserCredential> {
        const auth = getAuth();
        const user = <User>auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email as string, password);
        return reauthenticateWithCredential(user, credential);
    }

    public getUserId(): string {
        const currentUser = <User>getAuth().currentUser;
        return currentUser.uid;
    }

    public isLoggedIn(): boolean {
        return !!getAuth().currentUser;
    }
}
