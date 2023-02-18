import { WorkoutService } from '../../service/workoutService';
import { Workout } from '../../model/Workout';
import { TrainPageView } from './trainPageView';
import { ProfileService } from '../../service/profileService';
import { getAuth } from 'firebase/auth';

export class TrainPageController {
    workoutService: WorkoutService;
    trainPageView: TrainPageView;
    profileService: ProfileService;

    constructor(workoutService: WorkoutService, profileService: ProfileService, trainPageView: TrainPageView) {
        this.workoutService = workoutService;
        this.profileService = profileService;
        this.trainPageView = trainPageView;
    }

    public async render(id: string) {
        const workout: Workout = await this.workoutService.fetchWorkout(id);
        this.trainPageView.render(workout);
    }

    public addProfileWorkout(workout: Workout): void {
        const auth = getAuth();
        if (auth && auth.currentUser) {
            this.profileService.addProfileWorkout(auth.currentUser.uid, workout);
        }
    }
}
