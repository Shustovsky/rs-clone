import { Workout } from '../../model/Workout';
import './workoutCard.scss';
import { t } from 'i18next';

export class WorkoutCard {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workout: Workout): void {
        const card = <HTMLElement>document.createElement('div');
        const duration = Math.round(workout.duration / 60);
        card.innerHTML = `<div class='workouts__card uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light' data-src='${
            workout.coverImageUrl
        }' uk-img='loading: eager'>
                            <div class='workouts__wrapper-title'>
                                 <div class='workouts__title'>${workout.title}</div>
                                 <div class='workouts__title subtitle'>${workout.subtitle}</div>
                                 <div class='workouts__info'>${duration} ${t('workout.min')} - ${
            workout.difficulty
        } - ${workout.trainer.name}</div>
                            </div>
                            <div class='workouts__dimm'></div>
                         </div>`;

        document.querySelector(this.selector)?.append(card);
    }
}
