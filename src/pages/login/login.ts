import { HeaderView } from '../../components/header/headerView';
import { LoginWrapper } from './loginWrapper/loginWrapper';
import { LoginContent } from './loginContent/loginContent';
import { LoginApp } from './loginApp/loginApp';

export class LoginView {
    private readonly header: HeaderView;
    private readonly loginWrapper: LoginWrapper;
    private readonly loginContent: LoginContent;
    private readonly loginApp: LoginApp;


    constructor() {
        this.header = new HeaderView('#root');
        this.loginWrapper = new LoginWrapper('#root main');
        this.loginContent = new LoginContent('#root .login_container');
        this.loginApp = new LoginApp('#root .login_container');
    }

    public render(): void {
        const root = <HTMLBodyElement>document.querySelector('#root');
        root.innerHTML = '';
        this.header.createHeader();
        this.hideLoginButton();
        const main = document.createElement('main');
        main.className = 'login';
        root.append(main);

        this.loginWrapper.render();
        this.loginContent.render();
        this.loginApp.render();
    }

    private hideLoginButton(): void {
        const btn = <HTMLButtonElement>document.querySelector('.header__nav_login');
        btn.style.visibility = 'hidden';
    }
}
