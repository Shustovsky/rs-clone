import { WorkoutService } from '../../service/workoutService';
import { WorkoutListView } from './workoutListView';
import { Workout } from '../../model/Workout';

export class WorkoutListController {
    private workoutView: WorkoutListView;
    private workoutService: WorkoutService;

    constructor(workoutView: WorkoutListView, workoutService: WorkoutService) {
        this.workoutView = workoutView;
        this.workoutService = workoutService;
    }

    public async render() {
        const workouts: Workout[] = await this.workoutService.fetchWorkouts();
        this.workoutView.render(workouts);
    }
}
