import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { FirebaseApp, FirebaseOptions } from '@firebase/app';
import { DatabaseReference } from '@firebase/database';
import { WorkoutService } from '../../pages/workouts/WorkoutService';
import { Workout } from '../../model/Workout';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: 'AIzaSyA6_SztJbKk_gUv3OH7r2vB_DwbjJdRNPY',
        databaseURL: 'https://rsclone-a8acb-default-rtdb.europe-west1.firebasedatabase.app',
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;
    private readonly workoutService: WorkoutService;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutService = new WorkoutService(this.dbRef);
    }

    public run() {
        this.workoutService.fetchWorkouts((workouts: Workout[]) => console.log(workouts));
    }
}
