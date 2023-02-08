import footerTemplate from './footer.html';
import './footer.scss';

export class Footer {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('footer');
        container.className = 'footer';
        container.innerHTML = footerTemplate;
        root.append(container);
    }
}
