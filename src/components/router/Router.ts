export enum RouterPath {
    MAIN = '/',
    LOGIN = '/login',
    PROFILE = '/profile',
    WORKOUTS = '/workouts',
    WORKOUT = '/workout/',
    TRAIN = '/train/',
}

enum TitleName {
    MAIN = 'Home Workout | PUMATRAC',
    LOGIN = 'Login | PUMATRAC',
    PROFILE = 'PUMATRAC',
    WORKOUTS = 'Find Workouts | PUMATRAC',
    WORKOUT = 'Workout | PUMATRAC',
}

export class Router {
    public redirectToMain(): void {
        history.pushState('', '', RouterPath.MAIN);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.MAIN;
    }

    public redirectToLogin(): void {
        history.pushState('', '', RouterPath.LOGIN);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.LOGIN;
    }

    public redirectToProfile(): void {
        history.pushState('', '', RouterPath.PROFILE);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.PROFILE;
    }

    public redirectToWorkouts(): void {
        history.pushState('', '', RouterPath.WORKOUTS);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.WORKOUTS;
    }

    public redirectToWorkout(id: string): void {
        history.pushState('', '', `${RouterPath.WORKOUT}${id}`);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.WORKOUT;
    }

    public redirectToTrain(id: string): void {
        history.pushState('', '', `${RouterPath.TRAIN}${id}`);
        window.dispatchEvent(new Event('refreshPage'));
    }
}
