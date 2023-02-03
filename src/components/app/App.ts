import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { FirebaseApp, FirebaseOptions } from '@firebase/app';
import { DatabaseReference } from '@firebase/database';
import { WorkoutService } from '../../pages/workouts/WorkoutService';
import { MainPageView } from '../../pages/mainPage/mainPageView';
import { ActivitiesView } from '../activities/activitiesView';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;
    private readonly workoutService: WorkoutService;
    private readonly mainPage: MainPageView;
    private readonly activities: ActivitiesView;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutService = new WorkoutService(this.dbRef);
        this.mainPage = new MainPageView();
        this.activities = new ActivitiesView();
    }

    public async run() {
        const workouts = await this.workoutService.fetchWorkouts();
        console.log(workouts);
        this.mainPage.render();
        this.activities.render();
    }
}
