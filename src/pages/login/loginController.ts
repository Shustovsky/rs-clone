import { LoginView } from './loginView';
import { LoginValidator } from './loginValidationService';
import { t } from 'i18next';
import { ProfileService } from '../../service/profileService';
import { Router } from '../../components/router/Router';
import { ProfileAuth } from '../../model/ProfileAuth';
import { AuthService } from '../../service/authService';
import { Loader } from '../../components/loader/Loader';

export class LoginController {
    private readonly loginView: LoginView;
    private readonly loginValidator: LoginValidator;
    private readonly profileService: ProfileService;
    private readonly authService: AuthService;
    private readonly loader: Loader;
    private readonly router: Router;

    constructor(
        loginView: LoginView,
        loginValidator: LoginValidator,
        profileService: ProfileService,
        authService: AuthService
    ) {
        this.loginView = loginView;
        this.loginValidator = loginValidator;
        this.profileService = profileService;
        this.authService = authService;
        this.router = new Router();
        this.loader = new Loader();
    }

    public async render(): Promise<void> {
        this.loginView.render();
        this.loginView.bindLoginHandler((email, password) => {
            this.login(email, password);
        });
        this.loginView.bindSignUpHandler((email, password, passwordRepeat, input) => {
            this.signUp(email, password, passwordRepeat, input);
        });
        this.loginView.bindEmailHandler((email) => {
            this.validateEmail(email);
        });
        this.loginView.bindPasswordHandler((password) => {
            this.validatePassword(password);
        });
    }

    private async login(email: HTMLInputElement, password: HTMLInputElement) {
        if (this.validateEmail(email) && this.validatePassword(password)) {
            this.authService
                .logIn(email.value, password.value)
                .then(() => {
                    this.router.redirectToMain();
                    this.loginView.deleteButtonError('login_submit');
                })
                .catch(() => {
                    this.loginView.createButtonError('login_submit', t('login.loginIncorrect'));
                });
        }
    }

    private async signUp(
        email: HTMLInputElement,
        password: HTMLInputElement,
        passwordRepeat: HTMLInputElement,
        input: HTMLInputElement
    ): Promise<void> {
        if (
            this.validateEmail(email) &&
            this.validatePassword(password) &&
            this.validateMatchPassword(password, passwordRepeat) &&
            this.validateInputCheck(input)
        ) {
            this.loader.createLoader();
            const emailValue = email.value;
            const location = await this.profileService.getUserLocation();
            this.authService
                .signUp(emailValue, password.value)
                .then(async (userCredential) => {
                    const profile = new ProfileAuth(userCredential.user.uid, emailValue, location);
                    await this.profileService.createProfile(profile);
                    this.loginView.deleteButtonError('signup_submit');
                    this.router.redirectToMain();
                })
                .catch(() => {
                    this.loginView.createButtonError('signup_submit', t('login.signupIncorrect'));
                })
                .finally(() => this.loader.deleteLoader());
        }
    }

    private validateEmail(email: HTMLInputElement): boolean {
        if (this.loginValidator.validateEmail(email.value)) {
            this.loginView.deleteInputError(email);
            return true;
        } else {
            this.loginView.createInputError(email, t('login.emailIncorrect'));
            return false;
        }
    }

    private validatePassword(password: HTMLInputElement): boolean {
        if (this.loginValidator.validatePassword(password.value)) {
            this.loginView.deleteInputError(password);
            return true;
        } else {
            this.loginView.createInputError(password, t('login.passwordIncorrect'));
            return false;
        }
    }

    private validateMatchPassword(password: HTMLInputElement, passwordRepeat: HTMLInputElement): boolean {
        if (this.loginValidator.validateMatchPassword(password, passwordRepeat)) {
            this.loginView.deleteInputError(passwordRepeat);
            return true;
        } else {
            this.loginView.createInputError(passwordRepeat, t('login.repeatIncorrect'));
            return false;
        }
    }

    private validateInputCheck(input: HTMLInputElement): boolean {
        if (this.loginValidator.validateInputCheck(input)) {
            this.loginView.deleteInputError(input);
            return true;
        } else {
            this.loginView.createCheckboxError(input);
            return false;
        }
    }
}
