import bannersTemplate from './banners.html';
import './banners.scss';

export class Banners {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = bannersTemplate;
        root.append(container);
    }
}
