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
import { mockData } from '../../mock/mockData';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;
    private readonly workoutsService: WorkoutService;
    private readonly mainPage: MainPageView;
    private readonly profilePage: ProfilePageView;
    private readonly workoutsController: WorkoutListController;
    private readonly workoutView: WorkoutView;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutsService = new WorkoutService(this.dbRef);
        const workoutsView = new WorkoutListView();
        this.workoutsController = new WorkoutListController(workoutsView, this.workoutsService);
        this.mainPage = new MainPageView();
        this.profilePage = new ProfilePageView();
        this.workoutView = new WorkoutView();
    }

    public async run() {
        this.mainPage.render();
        //this.profilePage.render();
        //this.workoutsController.render();
        // this.workoutView.render(mockData[0]);
    }
}
