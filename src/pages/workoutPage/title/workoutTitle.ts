import { Workout } from '../../../model/Workout';
import './workoutTitle.scss';

export class WorkoutTitle {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workout: Workout): void {
        const title = <HTMLElement>document.createElement('div');
        title.className = 'workout__wrapper-title';
        title.innerHTML = `<div class='workout__title'>${workout.title}</div>
                           <div class='workout__subtitle'>${workout.subtitle}</div>`;

        document.querySelector(this.selector)?.append(title);
    }
}
