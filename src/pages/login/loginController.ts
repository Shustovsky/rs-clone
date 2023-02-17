import { LoginView } from './loginView';
import { LoginService } from './loginService';
import { LoginValidator } from './loginValidationService';
import { t } from 'i18next';
import { ProfileService } from '../../service/profileService';

export class LoginController {
    private loginView: LoginView;
    private loginService: LoginService;
    private loginValidator: LoginValidator;
    private profileService: ProfileService;

    constructor(
        loginView: LoginView,
        loginService: LoginService,
        loginValidator: LoginValidator,
        profileService: ProfileService
    ) {
        this.loginView = loginView;
        this.loginService = loginService;
        this.loginValidator = loginValidator;
        this.profileService = profileService;
    }

    public async render() {
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
            const auth = await this.loginService.authWithEmailAndPassword(email.value, password.value);
            if (auth) {
                this.loginView.deleteButtonError('login_submit');
            } else {
                this.loginView.createButtonError('login_submit', t('login.loginIncorrect'));
            }
        }
        //TODO переход в личный кабинет
    }

    private async signUp(
        email: HTMLInputElement,
        password: HTMLInputElement,
        passwordRepeat: HTMLInputElement,
        input: HTMLInputElement
    ) {
        if (
            this.validateEmail(email) &&
            this.validatePassword(password) &&
            this.validateMatchPassword(password, passwordRepeat) &&
            this.validateInputCheck(input)
        ) {
            const auth = await this.loginService.signUpWithEmailAndPassword(email.value, password.value);
            if (auth) {
                await this.profileService.createProfile(auth);
                this.loginView.deleteButtonError('signup_submit');
            } else {
                this.loginView.createButtonError('signup_submit', t('login.signupIncorrect'));
            }
            //TODO переход в личный кабинет
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
