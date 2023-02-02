import { WorkoutService } from './workoutsService';
import { WorkoutsView } from './workoutsView';
import { Workout } from '../../model/Workout';

export class WorkoutsController {
    private workoutView: WorkoutsView;
    private workoutService: WorkoutService;

    constructor(workoutView: WorkoutsView, workoutService: WorkoutService) {
        this.workoutView = workoutView;
        this.workoutService = workoutService;
    }

    public async drawWorkoutsPage() {
        const workouts: Workout[] = await this.workoutService.fetchWorkouts();
        this.workoutView.drawWorkoutsPage(workouts);
    }
}
