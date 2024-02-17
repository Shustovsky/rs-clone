import { loginAppTemplate } from './loginAppTemplate';
import './loginApp.scss';

export class LoginApp {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = loginAppTemplate();
        root.append(container);
    }
}
