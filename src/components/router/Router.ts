export enum RouterPath {
    MAIN = '/',
    LOGIN = '/login',
    PROFILE = '/profile',
    WORKOUTS = '/workouts',
    WORKOUT = '/workout/',
    TRAIN = '/train/',
}

export class Router {
    public redirectToMain(): void {
        history.pushState('', '', RouterPath.MAIN);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToLogin(): void {
        history.pushState('', '', RouterPath.LOGIN);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToProfile(): void {
        history.pushState('', '', RouterPath.PROFILE);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToWorkouts(): void {
        history.pushState('', '', RouterPath.WORKOUTS);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToWorkout(id: string): void {
        history.pushState('', '', `${RouterPath.WORKOUT}${id}`);
        window.dispatchEvent(new Event('refreshPage'));
    }

    public redirectToTrain(id: string): void {
        history.pushState('', '', `${RouterPath.TRAIN}${id}`);
        window.dispatchEvent(new Event('refreshPage'));
    }
}
