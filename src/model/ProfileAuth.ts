export class ProfileAuth {
    id: string;
    email: string;
    location: string;

    constructor(localId: string, email: string, location: string) {
        this.id = localId;
        this.email = email;
        this.location = location;
    }
}
