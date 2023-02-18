import { loginNowTemplate } from './loginNowTemplate';
import './loginNow.scss';
import { Router } from '../../../components/router/Router';

export class LoginNow {
    private readonly selector: string;
    private readonly router: Router;

    constructor(selector: string) {
        this.selector = selector;
        this.router = new Router();
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = loginNowTemplate();
        root.append(container);

        this.initListener();
    }

    private initListener(): void {
        const mainLink = <HTMLButtonElement>document.querySelector('.login-now_btn');
        mainLink.addEventListener('click', () => {
            this.router.redirectToLogin();
        });
    }
}
