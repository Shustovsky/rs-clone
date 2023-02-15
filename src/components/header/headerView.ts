import { headerTemplate } from './headerTemplate';
import './header.scss';

export class HeaderView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public createHeader(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const header = <HTMLElement>document.createElement('nav');
        header.className = 'header__nav';
        header.innerHTML = headerTemplate();
        root.append(header);
    }
}
