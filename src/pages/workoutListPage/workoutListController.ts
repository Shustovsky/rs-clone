import { WorkoutService } from '../../service/workoutService';
import { WorkoutListView } from './workoutListView';
import { Workout } from '../../model/Workout';
import { Loader } from '../../components/loader/Loader';

export class WorkoutListController {
    private workoutView: WorkoutListView;
    private workoutService: WorkoutService;
    loader: Loader;

    constructor(workoutView: WorkoutListView, workoutService: WorkoutService) {
        this.workoutView = workoutView;
        this.workoutService = workoutService;
        this.loader = new Loader();
    }

    public async render() {
        this.loader.createLoader();
        try {
            const workouts: Workout[] = await this.workoutService.fetchWorkouts();
            this.workoutView.render(workouts);
        } finally {
            this.loader.deleteLoader();
        }
    }
}
