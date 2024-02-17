import './workoutListTitle.scss';
import { t } from 'i18next';
import { Router } from '../router/Router';

export class WorkoutListTitle {
    private readonly selector: string;
    private readonly router: Router;

    constructor(selector: string) {
        this.selector = selector;
        this.router = new Router();
    }

    public render(workoutsCount: number): void {
        const title = <HTMLElement>document.createElement('div');
        title.className = 'workouts__page-title';
        title.innerHTML = `<span>${t('workoutList.title')}</span>
                           <span class='workouts__count-title'>${workoutsCount}</span>`;
        title.addEventListener('click', () => {
            this.router.redirectToWorkouts();
        });
        document.querySelector(this.selector)?.append(title);
    }
}
