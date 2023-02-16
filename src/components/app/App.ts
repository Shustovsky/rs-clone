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
import { TrainPageView } from '../../pages/trainPage/trainPageView';
import { TrainPageController } from '../../pages/trainPage/trainPageController';
import { LoginView } from '../../pages/login/loginView';
import { LoginService } from '../../pages/login/loginService';
import { LoginController } from '../../pages/login/loginController';
import { LoginValidator } from '../../pages/login/loginValidationService';
import { updateLanguage } from '../../utils/language';

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
    private readonly loginService: LoginService;
    private readonly loginController: LoginController;
    private readonly trainController: TrainPageController;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutService = new WorkoutService(this.dbRef);
        this.workoutListController = new WorkoutListController(new WorkoutListView(), this.workoutService);
        this.mainPage = new MainPageView();
        this.profilePage = new ProfilePageView();
        this.workoutController = new WorkoutController(this.workoutService, new WorkoutView());
        this.loginService = new LoginService(this.firebaseConfig.apiKey);
        this.loginController = new LoginController(new LoginView(), this.loginService, new LoginValidator());
        this.initLanguageListeners();
        this.trainController = new TrainPageController(this.workoutService, new TrainPageView());
    }

    public async run() {
        // this.mainPage.render();
        // this.loginController.render();
        this.profilePage.render();
        // this.workoutsController.render();
        // this.workoutListController.render();
        // this.workoutController.render('7719fdb0-41f3-46b8-9d69-cdad209d5775');
        // this.trainController.render('7719fdb0-41f3-46b8-9d69-cdad209d5775');
        // this.workoutController.render('7719fdb0-41f3-46b8-9d69-cdad209d57');

    }


    private rerenderPage(): void {
        const root = <HTMLBodyElement>document.getElementById('root');
        root.innerHTML = '';
        this.run();
    }

    private initLanguageListeners() {
        window.addEventListener('popstate', () => {
            updateLanguage();
            this.rerenderPage();
        })
        window.addEventListener('changeLanguage', () => {
            updateLanguage();
            this.rerenderPage();
        })
    }
}
