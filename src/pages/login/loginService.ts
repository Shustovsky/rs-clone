import { ProfileAuth } from '../../model/ProfileAuth';

export class LoginService {
    apiKey: string | undefined;

    constructor(apiKey: string | undefined) {
        this.apiKey = apiKey;
    }

    public authWithEmailAndPassword(email: string, password: string): Promise<ProfileAuth> {
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`, {
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
            .then((data) => new ProfileAuth(data.localId, data.idToken, email));
    }

    public signUpWithEmailAndPassword(email: string, password: string): Promise<ProfileAuth> {
        return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`, {
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
            .then((data) => new ProfileAuth(data.localId, data.idToken, email));
    }
}