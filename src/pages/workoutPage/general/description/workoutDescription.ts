import './workoutDescription.scss';
import { Workout } from '../../../../model/Workout';

export class WorkoutDescription {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workout: Workout): void {
        const duration = Math.round(workout.duration / 60);
        const interests = workout.interests.map((item) => item.name).join(' ');

        const description = document.createElement('div');
        description.className = 'workout__wrapper-description';
        description.innerHTML = `<div class='workout__info'> 
                                     <div class='workout__time'>${duration} min</div>
                                     <hr class='uk-divider-vertical'>
                                         <div>
                                              <div class='workout__difficulty'>${workout.difficulty}</div>
                                              <div class='workout__traner-name'>Train with ${workout.trainer.name}</div>
                                         </div>
                                 </div>
                                 <div>
                                     <div class='workout__interests-title'>interteted in</div>
                                     <div class='workout__interests-text'>${interests}</div>
                                 </div>`;

        document.querySelector(this.selector)?.append(description);
    }
}
