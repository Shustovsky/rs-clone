import { Workout } from '../../model/Workout';
import { WorkoutsTitle } from '../../components/workoutsTitle/workoutsTitle';
import { WorkoutCardList } from '../../components/workoutCartList/workoutCardList';

export class WorkoutsView {
    private readonly workoutCardList: WorkoutCardList;
    private readonly workoutsTitle: WorkoutsTitle;

    constructor() {
        this.workoutCardList = new WorkoutCardList('#root main');
        this.workoutsTitle = new WorkoutsTitle('#root main');
    }

    public render(workouts: Workout[]): void {
        const root = <HTMLBodyElement>document.querySelector('#root')
        const main = document.createElement('main');
        main.className = 'workouts uk-container';
        root.append(main);

        this.workoutsTitle.render(workouts.length);
        this.workoutCardList.render(workouts);
    }
}
