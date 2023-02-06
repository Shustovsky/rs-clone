import { Workout } from '../../model/Workout';
import './workoutCard.scss';

export class WorkoutCard {
    public static create(workout: Workout): string {
        const duration = Math.round(workout.duration / 60);
        return ` <div class='workouts__card uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light' data-src='${workout.coverImageUrl}' uk-img='loading: eager'>
                    <div class='workouts__wrapper-title'>
                         <div class='workouts__title'>${workout.title}</div>
                         <div class='workouts__title subtitle'>${workout.subtitle}</div>
                         <div class='workouts__info'>${duration} min - ${workout.difficulty} - ${workout.trainer.name}</div>
                    </div>
                    <div class='workouts__dimm'></div>
            </div>`;
    }
}
