export class Profile {
    id: string;
    email: string;
    firstName: string | null = null;
    lastName: string | null = null;
    location: string | null = null;
    gender: string | null = null;
    birthday: Date | null = null;
    weight: number | null = null;
    height: number | null = null;
    isPrivateOnlyMe = false;
    isUnitsMetric = false;
    isOffersNotificationEnabled = false;
    isEmailNotificationEnabled = false;
    workouts: ProfileWorkout[] = [];

    constructor(id: string, email: string) {
        this.id = id;
        this.email = email;
    }
}

export class ProfileWorkout {
    id: string;
    date: Date;
    title: string;
    imageUrl: string;
    description: string;
    calories: number;
    duration: number;
    score: number;
    count: number;

    constructor(
        id: string,
        date: Date,
        title: string,
        imageUrl: string,
        description: string,
        calories: number,
        duration: number,
        score: number,
        count: number
    ) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.calories = calories;
        this.duration = duration;
        this.score = score;
        this.count = count;
    }
}
