import './workoutBtnStart.scss';
import { t } from 'i18next';
import { Router } from '../../../components/router/Router';

export class WorkoutBtnStartView {
    private readonly selector: string;
    private readonly router: Router;

    constructor(selector: string) {
        this.selector = selector;
        this.router = new Router();
    }

    public render(id: string): void {
        const btnStart = <HTMLElement>document.createElement('div');
        btnStart.className = 'workout__wrapper-btn-start uk-link-reset';
        btnStart.setAttribute('uk-sticky', '');
        btnStart.innerHTML = `<a class='workout__btn-start' >${t('workout.start')}</a>`;
        btnStart.addEventListener('click', () => {
            this.router.redirectToTrain(id);
        });

        document.querySelector(this.selector)?.append(btnStart);
    }
}
