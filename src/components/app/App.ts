import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { FirebaseApp, FirebaseOptions } from '@firebase/app';
import { DatabaseReference } from '@firebase/database';
import { WorkoutService } from '../../service/workoutService';
import { MainPageView } from '../../pages/mainPage/mainPageView';
import { ProfilePageView } from '../../pages/profilePage/profileViewPage';
import { WorkoutListController } from '../../pages/workoutListPage/workoutListController';
import { WorkoutListView } from '../../pages/workoutListPage/workoutListView';
import { WorkoutView } from '../../pages/workoutPage/workoutPageView';
import { WorkoutController } from '../../pages/workoutPage/workoutController';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;

    private readonly workoutService: WorkoutService;
    private readonly workoutListController: WorkoutListController;
    private readonly workoutController: WorkoutController;
    private readonly mainPage: MainPageView;
    private readonly profilePage: ProfilePageView;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutService = new WorkoutService(this.dbRef);
        const workoutsView = new WorkoutListView();
        this.workoutListController = new WorkoutListController(workoutsView, this.workoutService);
        this.mainPage = new MainPageView();
        this.profilePage = new ProfilePageView();
        this.workoutController = new WorkoutController(this.workoutService, new WorkoutView());
    }

    public async run() {
        this.mainPage.render();
        //this.profilePage.render();
        //this.workoutListController.render();
        // this.workoutController.render('7719fdb0-41f3-46b8-9d69-cdad209d5775');
    }
}
