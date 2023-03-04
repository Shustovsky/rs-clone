import { Workout } from '../../model/Workout';
import { WorkoutCard } from '../workoutCard/workoutCard';
import './workoutCartList.scss';

export class WorkoutCardList {
    private readonly selector: string;
    private readonly workoutCard: WorkoutCard;

    constructor(selector: string) {
        this.selector = selector;
        this.workoutCard = new WorkoutCard('.workouts__wrapper-list');
    }

    public render(workouts: Workout[]): void {
        const workoutList = <HTMLElement>document.createElement('div');
        workoutList.className = 'workouts__wrapper-list uk-grid-small uk-child-width-expand@s uk-text-center';
        workoutList.setAttribute('uk-grid', '');
        document.querySelector(this.selector)?.append(workoutList);

        workouts.forEach((workout) => this.workoutCard.render(workout));
    }
}
