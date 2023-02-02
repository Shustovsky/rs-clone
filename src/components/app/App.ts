import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { FirebaseApp, FirebaseOptions } from '@firebase/app';
import { DatabaseReference } from '@firebase/database';
import { WorkoutService } from '../../pages/workouts/workoutsService';
import { WorkoutsController } from '../../pages/workouts/workouts.Controller';
import { WorkoutsView } from '../../pages/workouts/workoutsView';
import { HeaderView } from '../header/headerView';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;
    private readonly workoutService: WorkoutService;
    private readonly workoutsController: WorkoutsController;
    private readonly header: HeaderView;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.header = new HeaderView();
        this.workoutService = new WorkoutService(this.dbRef);
        const workoutsView = new WorkoutsView();
        this.workoutsController = new WorkoutsController(workoutsView, this.workoutService);
    }

    public async run() {
        this.header.createHeader();
        this.workoutsController.drawWorkoutsPage();
    }
}
