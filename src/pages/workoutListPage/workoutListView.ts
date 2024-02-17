import { Workout } from '../../model/Workout';
import { WorkoutListTitle } from '../../components/workoutListTitle/workoutListTitle';
import { WorkoutCardList } from '../../components/workoutCartList/workoutCardList';

export class WorkoutListView {
    private readonly workoutCardList: WorkoutCardList;
    private readonly workoutsTitle: WorkoutListTitle;
    private readonly selector: string;

    constructor(selector: string) {
        this.workoutCardList = new WorkoutCardList(`${selector} section`);
        this.workoutsTitle = new WorkoutListTitle(`${selector} section`);
        this.selector = selector;
    }

    public render(workouts: Workout[]): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const main = document.createElement('section');
        main.className = 'workouts uk-container';
        root.append(main);

        this.workoutsTitle.render(workouts.length);
        this.workoutCardList.render(workouts);
    }
}
