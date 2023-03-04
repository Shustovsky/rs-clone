import { Workout } from '../../model/Workout';
import { WorkoutTitle } from './title/workoutTitle';
import { WorkoutGeneral } from './general/workoutGeneral';
import '../workoutPage/workoutPage.scss';
import { WorkoutVideoView } from './workoutVideo/workoutVideoView';
import { WorkoutBtnStartView } from './workoutBtnStart/workoutBtnStartView';
import { t } from 'i18next';

export class WorkoutView {
    private readonly workoutTitle: WorkoutTitle;
    private readonly general: WorkoutGeneral;
    private readonly workoutVideo: WorkoutVideoView;
    private readonly workoutBtnStart: WorkoutBtnStartView;

    constructor() {
        this.workoutVideo = new WorkoutVideoView('#root .workout__intro-video');
        this.workoutTitle = new WorkoutTitle('#root .workout__intro-content');
        this.general = new WorkoutGeneral('#root .workout__intro-content');
        this.workoutBtnStart = new WorkoutBtnStartView('#root .workout__intro-content');
    }

    public render(workout: Workout): void {
        const root = <HTMLBodyElement>document.querySelector('#root');

        const main = document.createElement('main');
        main.className = 'workout uk-flex';
        root.append(main);

        const introVideo = document.createElement('div');
        introVideo.className = 'workout__intro-video';
        main.append(introVideo);

        const introContent = document.createElement('div');
        introContent.className = 'workout__intro-content';
        main.append(introContent);

        this.workoutVideo.render(workout);
        this.workoutTitle.render(workout);
        this.general.render(workout);
        this.workoutBtnStart.render(workout.id);
    }

    public createErrorBlock(): void {
        const root = <HTMLBodyElement>document.querySelector('#root');

        const error = <HTMLElement>document.createElement('div');
        error.className = 'wrapper-error uk-flex uk-flex-center';
        error.innerHTML = `<div class='error'>${t('workout.notFound')}</div>`;
        root.append(error);
    }
}
