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
        history.pushState('', '', `/`);
        window.dispatchEvent(new Event('refreshPage'));
    }
    public redirectToLogin() {
        history.pushState('', '', `/login`);
        window.dispatchEvent(new Event('refreshPage'));
    }
    public redirectToProfile() {
        history.pushState('', '', `/profile`);
        window.dispatchEvent(new Event('refreshPage'));
    }
    public redirectToWorkouts() {
        history.pushState('', '', `/workouts`);
        window.dispatchEvent(new Event('refreshPage'));
    }
    public redirectToWorkout(id: string) {
        history.pushState('', '', `/workout/${id}`);
        window.dispatchEvent(new Event('refreshPage'));
    }
    public redirectToTrain(id: string) {
        history.pushState('', '', `/train/${id}`);
        window.dispatchEvent(new Event('refreshPage'));
    }
}
