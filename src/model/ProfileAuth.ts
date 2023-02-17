export class ProfileAuth {
    id: string;
    idToken: string;
    email: string;

    constructor(localId: string, idToken: string, email: string) {
        this.id = localId;
        this.idToken = idToken;
        this.email = email;
    }
}
