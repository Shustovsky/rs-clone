import { Workout } from '../../../model/Workout';
import { WorkoutOverview } from './overview/workoutOverview';
import { WorkoutDescription } from './description/workoutDescription';

export class WorkoutGeneral {
    private readonly selector: string;
    private readonly workoutDescription: WorkoutDescription;
    private readonly workoutOverview: WorkoutOverview;

    constructor(selector: string) {
        this.selector = selector;
        this.workoutDescription = new WorkoutDescription('#root .workout__general-wrapper');
        this.workoutOverview = new WorkoutOverview('#root .workout__general-wrapper');
    }

    render(workout: Workout) {
        const generalWrapper = document.createElement('div');
        generalWrapper.className = 'workout__general-wrapper';
        document.querySelector(this.selector)?.append(generalWrapper);

        this.workoutDescription.render(workout);
        //this.workoutOverview.render(workout);
    }
}
