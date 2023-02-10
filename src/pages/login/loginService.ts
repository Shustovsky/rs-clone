import { FirebaseOptions } from '@firebase/app';

export class LoginService {
    public readonly firebaseConfig: FirebaseOptions;

    constructor(firebaseConfig: FirebaseOptions) {
        this.firebaseConfig = firebaseConfig;
    }

    public authWithEmailAndPassword(email: string, password: string): Promise<void> {
        return fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseConfig.apiKey}`,
            {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => response.json())
            .then((data) => data.idToken);
    }

    public signUpWithEmailAndPassowrd(email: string, password: string): Promise<void> {
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.firebaseConfig.apiKey}`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => data.idToken);
    }
}
