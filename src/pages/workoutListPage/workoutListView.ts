import { Workout } from '../../model/Workout';
import { WorkoutListTitle } from '../../components/workoutListTitle/workoutListTitle';
import { WorkoutCardList } from '../../components/workoutCartList/workoutCardList';

export class WorkoutListView {
    private readonly workoutCardList: WorkoutCardList;
    private readonly workoutsTitle: WorkoutListTitle;

    constructor() {
        this.workoutCardList = new WorkoutCardList('#root main');
        this.workoutsTitle = new WorkoutListTitle('#root main');
    }

    public render(workouts: Workout[]): void {
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'workouts uk-container';
        root.append(main);

        this.workoutsTitle.render(workouts.length);
        this.workoutCardList.render(workouts);
    }
}
