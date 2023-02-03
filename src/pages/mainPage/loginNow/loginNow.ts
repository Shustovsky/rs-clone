import loginNowTemplate from './loginNow.html';
import './loginNow.scss';

export class LoginNow {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = loginNowTemplate;
        root.append(container);
    }
}
