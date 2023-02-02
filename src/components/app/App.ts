import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { FirebaseApp, FirebaseOptions } from '@firebase/app';
import { DatabaseReference } from '@firebase/database';
import { WorkoutService } from '../../pages/workouts/WorkoutService';
import { HeaderView } from '../header/headerView';
import { MainPageView } from '../../pages/mainPage/mainPageView';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;
    private readonly workoutService: WorkoutService;
    private readonly header: HeaderView;
    private readonly mainPage: MainPageView;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.header = new HeaderView();
        this.workoutService = new WorkoutService(this.dbRef);
        this.mainPage = new MainPageView();
    }

    public async run() {
        this.header.createHeader();
        const workouts = await this.workoutService.fetchWorkouts();
        console.log(workouts);
        this.mainPage.createMainPage();
    }
}
