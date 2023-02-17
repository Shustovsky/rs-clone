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
import { HeaderView } from '../../components/header/headerView';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly dbRef: DatabaseReference;

    private readonly workoutService: WorkoutService;
    private readonly workoutListController: WorkoutListController;
    readonly workoutController: WorkoutController;
    readonly mainPage: MainPageView;
    readonly profilePage: ProfilePageView;
    private readonly loginService: LoginService;
    readonly loginController: LoginController;
    readonly trainController: TrainPageController;
    private readonly header: HeaderView;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.dbRef = ref(getDatabase());
        this.workoutService = new WorkoutService(this.dbRef);
        const workoutsView = new WorkoutListView();
        this.workoutListController = new WorkoutListController(workoutsView, this.workoutService);
        this.mainPage = new MainPageView();
        this.profilePage = new ProfilePageView();
        this.workoutController = new WorkoutController(this.workoutService, new WorkoutView());
        this.loginService = new LoginService(this.firebaseConfig.apiKey);
        this.loginController = new LoginController(new LoginView(), this.loginService, new LoginValidator());
        this.trainController = new TrainPageController(this.workoutService, new TrainPageView());
        this.header = new HeaderView('#root');

        this.initListeners();
    }

    public async run() {
        await this.renderPageForCurrentUrl();
    }

    private async renderPageForCurrentUrl() {
        this.clearPage();
        const url = window.location.pathname;
        if (url === '/') {
            this.header.createHeader();
            this.mainPage.render();
        } else if (url === '/login') {
            this.header.createHeader();
            this.loginController.render();
        } else if (url === '/profile') {
            this.header.createHeader();
            this.profilePage.render();
        } else if (url === '/workouts') {
            this.header.createHeader();
            this.workoutListController.render();
        } else if (url.startsWith('/workout/')) {
            this.header.createHeader();
            const workoutId = url.substring('/workout/'.length);
            this.workoutController.render(workoutId);
        } else if (url.startsWith('/train/')) {
            const workoutId = url.substring('/train/'.length);
            this.trainController.render(workoutId);
        } else {
            // render a 404 page
        }
    }

    private clearPage(): void {
        const root = <HTMLBodyElement>document.getElementById('root');
        root.innerHTML = '';
    }

    private initListeners(): void {
        window.addEventListener('popstate', () => {
            updateLanguage();
            this.renderPageForCurrentUrl();
        });

        window.addEventListener('changeLanguage', () => {
            updateLanguage();
            this.renderPageForCurrentUrl();
        });
        window.addEventListener('refreshPage', () => {
            this.renderPageForCurrentUrl();
        });
    }
}
