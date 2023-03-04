import loginWrapperTemplate from './loginWrapperTemplate.html';
import './loginWrapper.scss';

export class LoginWrapper {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        root.innerHTML = loginWrapperTemplate;
    }
}
