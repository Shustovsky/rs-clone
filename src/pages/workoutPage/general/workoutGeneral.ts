import { Workout } from '../../../model/Workout';
import { WorkoutOverview } from './overview/workoutOverview';
import { WorkoutDescription } from './description/workoutDescription';
import { WorkoutSectionExerciseView } from './workoutSectionExercise/workoutSectionExerciseView';
import './workoutGeneral.scss';

export class WorkoutGeneral {
    private readonly selector: string;
    private readonly workoutDescription: WorkoutDescription;
    private readonly workoutOverview: WorkoutOverview;
    private readonly workoutSectionExerciseView: WorkoutSectionExerciseView;

    constructor(selector: string) {
        this.selector = selector;
        this.workoutDescription = new WorkoutDescription('#root .workout__general-wrapper');
        this.workoutOverview = new WorkoutOverview('#root .workout__general-wrapper');
        this.workoutSectionExerciseView = new WorkoutSectionExerciseView('#root .workout__intro-content');
    }

    render(workout: Workout): void {
        const generalWrapper = document.createElement('div');
        generalWrapper.className = 'workout__general-wrapper uk-flex';
        document.querySelector(this.selector)?.append(generalWrapper);

        this.workoutDescription.render(workout);
        this.workoutOverview.render(workout);
        this.workoutSectionExerciseView.render(workout);
    }
}
