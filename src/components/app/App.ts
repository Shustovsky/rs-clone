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
import { LoginView } from '../../pages/login/loginView';
import { LoginService } from '../../pages/login/loginService';
import { LoginController } from '../../pages/login/loginController';
import { LoginValidator } from '../../pages/login/loginValidationService';

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
    private readonly loginView: LoginView;
    private readonly loginService: LoginService;
    private readonly loginController: LoginController;
    private readonly loginValidator: LoginValidator;


    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutsService = new WorkoutService(this.dbRef);
        const workoutsView = new WorkoutListView();
        this.workoutsController = new WorkoutListController(workoutsView, this.workoutsService);
        this.mainPage = new MainPageView();
        this.profilePage = new ProfilePageView();
        this.workoutView = new WorkoutView();
        this.loginView = new LoginView();
        this.loginService = new LoginService(this.firebaseConfig);
        this.loginValidator = new LoginValidator();
        this.loginController = new LoginController(this.loginView, this.loginService, this.loginValidator);
    }

    public async run() {
        this.loginController.render();
        // this.profilePage.render();
        // this.workoutsController.render();
    }
}
