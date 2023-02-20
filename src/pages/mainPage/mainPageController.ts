import { MainPageView } from './mainPageView';
import { getAuth } from 'firebase/auth';
import { WorkoutListView } from '../workoutListPage/workoutListView';
import { WorkoutService } from '../../service/workoutService';
import { Workout } from '../../model/Workout';
import { Loader } from '../../components/loader/Loader';

export class MainPageController {
    private readonly mainPageView: MainPageView;
    private workoutView: WorkoutListView;
    private workoutService: WorkoutService;
    private readonly loader: Loader;

    constructor(workoutView: WorkoutListView, workoutService: WorkoutService) {
        this.mainPageView = new MainPageView();
        this.workoutView = workoutView;
        this.workoutService = workoutService;
        this.loader = new Loader();
    }

    public async render() {
        const auth = getAuth();
        this.loader.createLoader();
        try {
            if (auth.currentUser) {
                await this.mainPageView.renderWithoutLoginSection();
                const workouts: Workout[] = await this.workoutService.fetchWorkouts();
                await this.workoutView.render(workouts);
            } else {
                this.mainPageView.render();
            }
        } finally {
            this.loader.deleteLoader();
        }
    }
}
