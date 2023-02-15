import './workoutBtnStart.scss';
import { t } from 'i18next';

export class WorkoutBtnStartView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(): void {
        const btnStart = <HTMLElement>document.createElement('div');
        btnStart.className = 'workout__wrapper-btn-start uk-link-reset';
        btnStart.setAttribute('uk-sticky', '');
        btnStart.innerHTML = `<a class='workout__btn-start' >${t('workout.start')}</a>`;

        document.querySelector(this.selector)?.append(btnStart);
    }
}
