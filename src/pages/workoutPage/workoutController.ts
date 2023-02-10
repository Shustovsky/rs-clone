import { WorkoutService } from '../../service/workoutService';
import { WorkoutView } from './workoutPageView';
import { Workout } from '../../model/Workout';

export class WorkoutController {
    workoutService: WorkoutService;
    workoutView: WorkoutView;

    constructor(workoutService: WorkoutService, workoutView: WorkoutView) {
        this.workoutService = workoutService;
        this.workoutView = workoutView;
    }

    public async render(id: string) {
        const workout: Workout = await this.workoutService.fetchWorkout(id);
        this.workoutView.render(workout);
    }
}