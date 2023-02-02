import { HeaderView } from '../../components/header/headerView';
import { Slider } from './slider/slider';

export class MainPageView {
    private readonly header: HeaderView;
    private readonly slider: Slider;

    constructor() {
        this.header = new HeaderView('#root');
        this.slider = new Slider('#root main');
    }

    public render() {
        this.header.createHeader();
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__content';
        root.append(main);

        this.slider.render();
    }
}
