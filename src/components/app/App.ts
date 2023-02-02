import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { FirebaseApp, FirebaseOptions } from '@firebase/app';
import { DatabaseReference } from '@firebase/database';
import { WorkoutService } from '../../pages/workouts/workoutService';
import { MainPageView } from '../../pages/mainPage/mainPageView';
import { WorkoutsController } from '../../pages/workouts/workouts.Controller';
import { WorkoutsView } from '../../pages/workouts/workoutsView';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;
    private readonly workoutService: WorkoutService;
    private readonly mainPage: MainPageView;
    private readonly workoutsController: WorkoutsController;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutService = new WorkoutService(this.dbRef);
        const workoutsView = new WorkoutsView();
        this.workoutsController = new WorkoutsController(workoutsView, this.workoutService);
        this.mainPage = new MainPageView();
    }

    public async run() {
        this.mainPage.render();
        // this.workoutsController.drawWorkoutsPage();
    }
}
