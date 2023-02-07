import { Workout } from '../../model/Workout';
import { WorkoutTitle } from './title/workoutTitle';
import { WorkoutGeneral } from './general/workoutGeneral';
import '../workoutPage/workoutPage.scss';

export class WorkoutView {
    private readonly workoutTitle: WorkoutTitle;
    private readonly general: WorkoutGeneral;

    constructor() {
        this.workoutTitle = new WorkoutTitle('#root .workout__intro-content');
        this.general = new WorkoutGeneral('#root .workout__intro-content');
    }

    public render(workout: Workout): void {
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'workout uk-container uk-flex';
        root.append(main);

        const introVideo = document.createElement('div');
        introVideo.className = 'workout__intro-video';
        main.append(introVideo);

        const introContent = document.createElement('div');
        introContent.className = 'workout__intro-content';
        main.append(introContent);

        this.workoutTitle.render(workout);
        this.general.render(workout);
    }
}
