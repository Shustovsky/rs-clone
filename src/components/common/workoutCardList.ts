import { Workout } from '../../model/Workout';
import { WorkoutCard } from './workoutCard';
import './workoutCartList.scss';

export class WorkoutCardList {
    public static create(workouts: Workout[]): HTMLElement {
        const workoutList = <HTMLElement>document.createElement('div');
        workoutList.className = 'workouts__wrapper-list uk-grid-small uk-child-width-expand@s uk-text-center';
        workoutList.setAttribute('uk-grid', '');

        workoutList.innerHTML = workouts.map((workout) => WorkoutCard.create(workout)).join('');
        return workoutList;
    }
}
