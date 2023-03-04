import { notFoundTemplate } from './notFoundTemplate';
import './notFound.scss';
import { Footer } from '../footer/footer';

export class NotFound {
    private readonly selector: string;
    private readonly footer: Footer;

    constructor(selector: string) {
        this.selector = selector;
        this.footer = new Footer('#root');
    }

    public render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('main');
        container.className = 'main';
        container.innerHTML = notFoundTemplate();
        root.append(container);

        this.footer.render();
    }
}
