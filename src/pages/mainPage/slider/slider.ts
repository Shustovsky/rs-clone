import { sliderTemplate } from './sliderTemplate';
import './slider.scss';

export class Slider {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = sliderTemplate();
        root.append(container);
    }
}
