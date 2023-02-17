export class ProfileAuth {
    id: string;
    email: string;

    constructor(localId: string, email: string) {
        this.id = localId;
        this.email = email;
    }
}
