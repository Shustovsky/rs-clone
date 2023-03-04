import { WorkoutService } from '../../service/workoutService';
import { WorkoutView } from './workoutPageView';
import { Workout } from '../../model/Workout';
import { Loader } from '../../components/loader/Loader';

export class WorkoutController {
    private readonly workoutService: WorkoutService;
    private readonly workoutView: WorkoutView;
    private readonly loader: Loader;

    constructor(workoutService: WorkoutService, workoutView: WorkoutView) {
        this.workoutService = workoutService;
        this.workoutView = workoutView;
        this.loader = new Loader();
    }

    public async render(id: string): Promise<void> {
        this.loader.createLoader();
        try {
            const workout: Workout = await this.workoutService.fetchWorkout(id);
            this.workoutView.render(workout);
        } catch (e) {
            this.workoutView.createErrorBlock();
        } finally {
            this.loader.deleteLoader();
        }
    }
}
