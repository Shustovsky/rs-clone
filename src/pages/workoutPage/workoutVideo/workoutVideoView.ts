import { Workout } from '../../../model/Workout';
import './workoutVideo.scss';

export class WorkoutVideoView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workout: Workout): void {
        const videoWrapper = <HTMLElement>document.createElement('div');
        videoWrapper.className = 'workout__wrapper-video';
        videoWrapper.innerHTML = `<video class='workout__video' src="${workout.introVideoUrl}"  loop muted playsinline uk-video="autoplay: inview"></video>`;

        document.querySelector(this.selector)?.append(videoWrapper);
    }
}
