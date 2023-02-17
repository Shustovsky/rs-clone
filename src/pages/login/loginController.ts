import { LoginView } from './loginView';
import { LoginService } from './loginService';
import { LoginValidator } from './loginValidationService';
import { t } from 'i18next';

export class LoginController {
    private loginView: LoginView;
    private loginService: LoginService;
    private loginValidator: LoginValidator;

    constructor(loginView: LoginView, loginService: LoginService, loginValidator: LoginValidator) {
        this.loginView = loginView;
        this.loginService = loginService;
        this.loginValidator = loginValidator;
    }

    public render(): void {
        this.loginView.render();

        this.loginView.bindLoginHandler((email, password) => {
            if (this.validateEmail(email) && this.validatePassword(password)) {
                this.loginService.authWithEmailAndPassword(email.value, password.value).then((token) => {
                    if (token) {
                        this.loginView.deleteButtonError('login_submit');
                        history.pushState('', '', '/');
                        window.dispatchEvent(new Event('refreshPage'));
                    } else {
                        this.loginView.createButtonError('login_submit', t('login.loginIncorrect'));
                    }
                });
            }
        });

        this.loginView.bindSignUpHandler((email, password, passwordRepeat, input) => {
            if (
                this.validateEmail(email) &&
                this.validatePassword(password) &&
                this.validateMatchPassword(password, passwordRepeat) &&
                this.validateInputCheck(input)
            ) {
                this.loginService.signUpWithEmailAndPassword(email.value, password.value).then((token) => {
                    if (token) {
                        this.loginView.deleteButtonError('signup_submit');
                        history.pushState('', '', '/');
                        window.dispatchEvent(new Event('refreshPage'));
                    } else {
                        this.loginView.createButtonError('signup_submit', t('login.signupIncorrect'));
                    }
                });
            }
        });

        this.loginView.bindEmailHandler((email) => {
            this.validateEmail(email);
        });
        this.loginView.bindPasswordHandler((password) => {
            this.validatePassword(password);
        });
    }

    validateEmail(email: HTMLInputElement): boolean {
        if (this.loginValidator.validateEmail(email.value)) {
            this.loginView.deleteInputError(email);
            return true;
        } else {
            this.loginView.createInputError(email, t('login.emailIncorrect'));
            return false;
        }
    }

    validatePassword(password: HTMLInputElement): boolean {
        if (this.loginValidator.validatePassword(password.value)) {
            this.loginView.deleteInputError(password);
            return true;
        } else {
            this.loginView.createInputError(password, t('login.passwordIncorrect'));
            return false;
        }
    }

    validateMatchPassword(password: HTMLInputElement, passwordRepeat: HTMLInputElement): boolean {
        if (this.loginValidator.validateMatchPassword(password, passwordRepeat)) {
            this.loginView.deleteInputError(passwordRepeat);
            return true;
        } else {
            this.loginView.createInputError(passwordRepeat, t('login.repeatIncorrect'));
            return false;
        }
    }

    validateInputCheck(input: HTMLInputElement): boolean {
        if (this.loginValidator.validateInputCheck(input)) {
            this.loginView.deleteInputError(input);
            return true;
        } else {
            this.loginView.createCheckboxError(input);
            return false;
        }
    }
}
