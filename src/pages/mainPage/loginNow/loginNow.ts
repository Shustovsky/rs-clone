import { loginNowTemplate } from './loginNowTemplate';
import './loginNow.scss';

export class LoginNow {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = loginNowTemplate();
        root.append(container);

        this.initListner();
    }

    private initListner(): void {
        const mainLink = <HTMLButtonElement>document.querySelector('.login-now_btn');
        mainLink.addEventListener('click', () => {
            history.pushState('', '', `/login`);
            window.dispatchEvent(new Event('refreshPage'));
        });
    }
}
