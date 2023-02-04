import '../activities/activities.scss';
import activitiesTemplate from '../activities/activities.html';
import { Workout } from '../../../model/Workout';

export class ActivitiesView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render() {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const activities = document.createElement('div');
        activities.classList.add('activities_wrapper');
        activities.classList.add('uk-container');
        activities.innerHTML = activitiesTemplate;
        root.append(activities);
    }

    public createActivitiesStats(workouts: Workout[]): void {
        const activitiesCount = <HTMLDivElement>document.querySelector('.activities_activity_value');
        const workoutTime = <HTMLDivElement>document.querySelector('.activities_time_value');
        activitiesCount.textContent = workouts.length.toString();
        const durationArr = workouts.map((workout: Workout): number => workout.duration) as number[];
        const duration = durationArr.reduce(
            (workoutPrev: number, workoutNext: number): number => (workoutPrev + workoutNext) / 60
        );
        workoutTime.textContent = `${Math.round(duration)}h ${Math.round((duration * 60) % 60)}min`;
    }
}
