import { LoginWrapper } from './loginWrapper/loginWrapper';
import { LoginContent } from './loginContent/loginContent';
import { LoginApp } from './loginApp/loginApp';

export class LoginView {
    private readonly loginWrapper: LoginWrapper;
    private readonly loginContent: LoginContent;
    private readonly loginApp: LoginApp;

    constructor() {
        this.loginWrapper = new LoginWrapper('#root main');
        this.loginContent = new LoginContent('#root .login_container');
        this.loginApp = new LoginApp('#root .login_container');
    }

    public render(): void {
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'login';
        root.append(main);

        this.loginWrapper.render();
        this.loginContent.render();
        this.loginApp.render();
    }

    public bindLoginHandler(callback: (email: HTMLInputElement, password: HTMLInputElement) => void): void {
        const loginSubmit = <HTMLInputElement>document.getElementById('login_submit');
        loginSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            const email = <HTMLInputElement>document.getElementById('login_email');
            const password = <HTMLInputElement>document.getElementById('login_password');

            callback(email, password);
        });
    }

    public bindSignUpHandler(
        callback: (
            email: HTMLInputElement,
            password: HTMLInputElement,
            passwordRepeat: HTMLInputElement,
            input: HTMLInputElement
        ) => void
    ): void {
        const loginSubmit = <HTMLInputElement>document.getElementById('signup_submit');
        loginSubmit.addEventListener('click', (e) => {
            e.preventDefault();
            const email = <HTMLInputElement>document.getElementById('signup_email');
            const password = <HTMLInputElement>document.getElementById('signup_password');
            const passwordRepeat = <HTMLInputElement>document.getElementById('signup_password-repeat');
            const input = <HTMLInputElement>document.getElementById('termsAndPrivacy');
            callback(email, password, passwordRepeat, input);
        });
    }

    public bindEmailHandler(callback: (email: HTMLInputElement) => void): void {
        const emails: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[type='email']`);
        emails.forEach((email) => {
            email.addEventListener('input', () => {
                callback(email);
            });
        });
    }

    public bindPasswordHandler(callback: (password: HTMLInputElement) => void): void {
        const passwords: NodeListOf<HTMLInputElement> = document.querySelectorAll(`input[type='password']`);
        passwords.forEach((password) => {
            password.addEventListener('input', () => {
                callback(password);
            });
        });
    }

    public createInputError(input: HTMLInputElement, message: string) {
        const warningNull = 'This field is required';
        const warningMessage = `${input.type} ${message}`;

        input.classList.add('uk-form-danger');

        const inputError = <HTMLDivElement>document.getElementById(`${input.id}-error`);

        if (!inputError) {
            const error = document.createElement('div');
            error.textContent = input.value.length ? warningMessage : warningNull;
            error.id = `${input.id}-error`;
            error.className = `message-error`;
            input.after(error);
        } else {
            inputError.textContent = input.value.length ? warningMessage : warningNull;
        }
    }

    public deleteInputError(input: HTMLInputElement) {
        input.classList.remove('uk-form-danger');
        const inputError = <HTMLDivElement>document.getElementById(`${input.id}-error`);
        inputError?.remove();
    }

    public createButtonError(btnName: string) {
        const btn = <HTMLButtonElement>document.getElementById(btnName);
        const inputError = <HTMLDivElement>document.getElementById(`${btn.id}-error`);

        if (!inputError) {
            const error = document.createElement('div');
            error.textContent = 'The e-mail or password are incorrect. Please try again.';
            error.id = `${btn.id}-error`;
            error.className = `message-error`;
            btn.after(error);
        }
    }

    public deleteButtonError(btnName: string) {
        const btn = <HTMLButtonElement>document.getElementById(btnName);
        const btnError = <HTMLDivElement>document.getElementById(`${btn.id}-error`);
        btnError?.remove();
    }

    public createCheckboxError(input: HTMLInputElement) {
        const container = input.parentNode;
        const inputError = <HTMLDivElement>document.getElementById(`${input.id}-error`);

        if (!inputError) {
            const error = document.createElement('div');
            error.textContent = 'Please agree to our Terms & Conditions.';
            error.id = `${input.id}-error`;
            error.className = `message-error`;
            container?.append(error);
        }
    }
}
