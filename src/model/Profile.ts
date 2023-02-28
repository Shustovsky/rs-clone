export class Profile {
    id: string;
    email: string;
    firstName: string | null = null;
    lastName: string | null = null;
    location: string;
    gender: string | null = null;
    birthday: string | null = null;
    weight: number | null = null;
    height: string | null = null;
    isPrivateOnlyMe = false;
    isUnitsMetric = false;
    isOffersNotificationEnabled = false;
    isEmailNotificationEnabled = false;
    workouts: ProfileWorkout[] = [];

    constructor(id: string, email: string, location: string) {
        this.id = id;
        this.email = email;
        this.location = location;
    }
}

export class ProfileWorkout {
    id: string;
    date: string;
    title: string;
    imageUrl: string;
    description: string;
    calories: number;
    duration: number;
    score: number;

    constructor(
        id: string,
        date: string,
        title: string,
        imageUrl: string,
        description: string,
        calories: number,
        duration: number,
        score: number
    ) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.calories = calories;
        this.duration = duration;
        this.score = score;
    }
}
