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
    public redirectToMain() {
        history.pushState('', '', RouterPath.MAIN);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.MAIN;
    }

    public redirectToLogin() {
        history.pushState('', '', RouterPath.LOGIN);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.LOGIN;
    }

    public redirectToProfile() {
        history.pushState('', '', RouterPath.PROFILE);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.PROFILE;
    }

    public redirectToWorkouts() {
        history.pushState('', '', RouterPath.WORKOUTS);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.WORKOUTS;
    }

    public redirectToWorkout(id: string) {
        history.pushState('', '', `${RouterPath.WORKOUT}${id}`);
        window.dispatchEvent(new Event('refreshPage'));
        document.title = TitleName.WORKOUT;
    }

    public redirectToTrain(id: string) {
        history.pushState('', '', `${RouterPath.TRAIN}${id}`);
        window.dispatchEvent(new Event('refreshPage'));
    }
}
