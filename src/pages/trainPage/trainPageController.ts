import { WorkoutService } from '../../service/workoutService';
import { Workout } from '../../model/Workout';
import { TrainPageView } from './trainPageView';
import { ProfileService } from '../../service/profileService';
import { AuthService } from '../../service/authService';

export class TrainPageController {
    workoutService: WorkoutService;
    trainPageView: TrainPageView;
    profileService: ProfileService;
    authService: AuthService;

    constructor(
        workoutService: WorkoutService,
        profileService: ProfileService,
        authService: AuthService,
        trainPageView: TrainPageView
    ) {
        this.workoutService = workoutService;
        this.profileService = profileService;
        this.trainPageView = trainPageView;
        this.authService = authService;
    }

    public async render(id: string): Promise<void> {
        const workout: Workout = await this.workoutService.fetchWorkout(id);
        this.trainPageView.render(workout);
    }

    public addProfileWorkout(workout: Workout): void {
        if (this.authService.isLoggedIn()) {
            this.profileService.addProfileWorkout(this.authService.getUserId(), workout);
        }
    }
}
