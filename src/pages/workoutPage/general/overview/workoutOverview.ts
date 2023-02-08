import { Workout } from '../../../../model/Workout';

export class WorkoutOverview {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workout: Workout): void {
        //todo impl in RC-18
    }
}