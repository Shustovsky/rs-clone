export enum RouterPath {
    MAIN = '/',
    LOGIN = '/login',
    PROFILE = '/profile',
    WORKOUTS = '/workouts',
    WORKOUT = '/workout/',
    TRAIN = '/train/',
}

export class Router {
    public redirectToMain() {
        history.pushState('', '', RouterPath.MAIN);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToLogin() {
        history.pushState('', '', RouterPath.LOGIN);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToProfile() {
        history.pushState('', '', RouterPath.PROFILE);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToWorkouts() {
        history.pushState('', '', RouterPath.WORKOUTS);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToWorkout(id: string) {
        history.pushState('', '', `${RouterPath.WORKOUT}${id}`);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToTrain(id: string) {
        history.pushState('', '', `${RouterPath.TRAIN}${id}`);
        window.dispatchEvent(new Event('refreshPage'));
    }
}
