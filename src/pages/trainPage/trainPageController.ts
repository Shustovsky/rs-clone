import { WorkoutService } from '../../service/workoutService';
import { Workout } from '../../model/Workout';
import { TrainPageView } from './trainPageView';

export class TrainPageController {
    workoutService: WorkoutService;
    trainPageView: TrainPageView;

    constructor(workoutService: WorkoutService, trainPageView: TrainPageView) {
        this.workoutService = workoutService;
        this.trainPageView = trainPageView;
    }

    public async render(id: string) {
        const workout: Workout = await this.workoutService.fetchWorkout(id);
        this.trainPageView.render(workout);
    }
}
