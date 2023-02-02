import sliderTemplate from './slider.html';
import './slider.scss';

export class Slider {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    render() {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const container = document.createElement('div');
        container.innerHTML = sliderTemplate;
        root.append(container);
    }
}
