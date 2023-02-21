import { initializeApp } from 'firebase/app';
import { getDatabase, ref } from 'firebase/database';
import { FirebaseApp, FirebaseOptions } from '@firebase/app';
import { DatabaseReference, Database } from '@firebase/database';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { WorkoutService } from '../../service/workoutService';
import { MainPageController } from '../../pages/mainPage/mainPageController';
import { ProfilePageView } from '../../pages/profilePage/profileViewPage';
import { WorkoutListController } from '../../pages/workoutListPage/workoutListController';
import { WorkoutListView } from '../../pages/workoutListPage/workoutListView';
import { WorkoutView } from '../../pages/workoutPage/workoutPageView';
import { WorkoutController } from '../../pages/workoutPage/workoutController';
import { TrainPageView } from '../../pages/trainPage/trainPageView';
import { TrainPageController } from '../../pages/trainPage/trainPageController';
import { LoginView } from '../../pages/login/loginView';
import { LoginController } from '../../pages/login/loginController';
import { LoginValidator } from '../../pages/login/loginValidationService';
import { updateLanguage } from '../../utils/language';
import { ProfileService } from '../../service/profileService';
import { HeaderController } from '../header/headerController';
import { Router, RouterPath } from '../router/Router';
import { AuthService } from '../../service/authService';
import { ProfileController } from '../../pages/profilePage/ProfileController';

export class App {
    private readonly firebaseConfig: FirebaseOptions = {
        apiKey: process.env.API_KEY,
        databaseURL: process.env.DATABASE_URL,
    };

    private readonly app: FirebaseApp;
    private readonly database: Database;
    private readonly dbRef: DatabaseReference;

    private readonly router: Router;

    private readonly workoutService: WorkoutService;
    private readonly profileService: ProfileService;
    private readonly authService: AuthService;

    private readonly workoutListController: WorkoutListController;
    private readonly workoutController: WorkoutController;
    private readonly loginController: LoginController;
    private readonly trainController: TrainPageController;
    private readonly profileController: ProfileController;

    private readonly mainPage: MainPageController;
    private readonly header: HeaderController;
    private isLoading = true;
    private user: User | null = null;

    constructor() {
        this.app = initializeApp(this.firebaseConfig);
        this.database = getDatabase();
        this.dbRef = ref(this.database);

        this.workoutService = new WorkoutService(this.dbRef);
        this.profileService = new ProfileService(this.dbRef, this.database);
        this.authService = new AuthService();
        this.router = new Router();

        this.workoutListController = new WorkoutListController(new WorkoutListView('#root'), this.workoutService);
        this.workoutController = new WorkoutController(this.workoutService, new WorkoutView());
        this.profileController = new ProfileController(
            new ProfilePageView(),
            this.profileService,
            this.authService,
            this.router
        );
        this.loginController = new LoginController(
            new LoginView(),
            new LoginValidator(),
            this.profileService,
            this.authService
        );
        const trainPageView = new TrainPageView();
        this.trainController = new TrainPageController(
            this.workoutService,
            this.profileService,
            this.authService,
            trainPageView
        );
        trainPageView.trainPageController = this.trainController;

        this.mainPage = new MainPageController(new WorkoutListView('#root main div'), this.workoutService);
        this.header = new HeaderController();
        this.initListeners();
    }

    public async run() {
        await this.renderPageForCurrentUrl();
    }

    private async renderPageForCurrentUrl(): Promise<void> {
        if (this.isLoading) return;
        this.clearPage();
        const url = window.location.pathname;

        if (url === RouterPath.MAIN) {
            this.header.render();
            this.mainPage.render();
            return;
        }
        if (url === RouterPath.LOGIN) {
            this.header.render();
            await this.loginController.render();
            return;
        }

        if (this.user) {
            if (url === RouterPath.PROFILE) {
                this.header.render();
                this.profileController.render();
                return;
            }
            if (url === RouterPath.WORKOUTS) {
                this.header.render();
                await this.workoutListController.render();
                return;
            }
            if (url.startsWith(RouterPath.WORKOUT)) {
                this.header.render();
                const workoutId = url.split('/').at(-1) || 'not found';
                await this.workoutController.render(workoutId);
                return;
            }
            if (url.startsWith(RouterPath.TRAIN)) {
                const workoutId = url.split('/').at(-1) || 'not found';
                await this.trainController.render(workoutId);
                return;
            }
        } else {
            this.header.render();
            await this.loginController.render();
            return;
        }
    }

    private clearPage(): void {
        const root = <HTMLBodyElement>document.getElementById('root');
        root.innerHTML = '';
    }

    private initListeners(): void {
        window.addEventListener('popstate', async () => {
            await updateLanguage();
            await this.renderPageForCurrentUrl();
        });

        window.addEventListener('changeLanguage', async () => {
            await updateLanguage();
            await this.renderPageForCurrentUrl();
        });
        window.addEventListener('refreshPage', () => {
            this.renderPageForCurrentUrl();
        });

        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            this.isLoading = false;
            this.user = user;
            await this.renderPageForCurrentUrl();
        });
    }
}
