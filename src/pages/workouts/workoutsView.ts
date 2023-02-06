import { Workout } from '../../model/Workout';
import { Title } from '../../components/title/title';
import { WorkoutCardList } from '../../components/worcoutcartList/workoutCardList';

export class WorkoutsView {
    public render(workouts: Workout[]): void {
        const root = <HTMLBodyElement>document.querySelector('#root')
        const main = document.createElement('main');
        main.className = 'workouts uk-container';

        const title = Title.createWorkoutsTitle(workouts.length);
        main.append(title);
        const workoutList = WorkoutCardList.create(workouts);
        title.after(workoutList);

        document.body.append(main);
        root.append(main);
    }
}
