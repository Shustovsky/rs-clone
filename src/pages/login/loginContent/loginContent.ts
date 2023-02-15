import { loginContentTemplate } from './loginContentTemplate';
import './loginContent.scss';

export class LoginContent {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = loginContentTemplate();
        root.append(container);
    }
}
