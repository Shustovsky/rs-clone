import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { FirebaseApp, FirebaseOptions } from '@firebase/app';
import { DatabaseReference } from '@firebase/database';
import { WorkoutService } from '../../pages/workouts/workoutsService';
import { ProfilePageView } from '../../pages/profilePage/profileViewPage';
import { WorkoutsController } from '../../pages/workouts/workouts.Controller';
import { WorkoutsView } from '../../pages/workouts/workoutsView';
import { LoginView } from '../../pages/login/loginView';
import { LoginService } from '../../pages/login/loginService';
import { LoginController } from '../../pages/login/loginController';
import { LoginValidator } from '../../pages/login/loginValidationService';

export class App {
    public readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;
    private readonly workoutService: WorkoutService;
    private readonly profilePage: ProfilePageView;
    private readonly workoutsController: WorkoutsController;
    private readonly loginView: LoginView;
    private readonly loginService: LoginService;
    private readonly loginController: LoginController;
    private readonly loginValidator: LoginValidator;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutService = new WorkoutService(this.dbRef);
        const workoutsView = new WorkoutsView();
        this.workoutsController = new WorkoutsController(workoutsView, this.workoutService);
        this.profilePage = new ProfilePageView();

        this.loginView = new LoginView();
        this.loginService = new LoginService(this.firebaseConfig);
        this.loginValidator = new LoginValidator();
        this.loginController = new LoginController(this.loginView, this.loginService, this.loginValidator);
    }

    public async run() {
        this.loginController.render();
        // this.workoutsController.render();
    }
}
