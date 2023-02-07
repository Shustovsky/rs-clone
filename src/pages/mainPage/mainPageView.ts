import { HeaderView } from '../../components/header/headerView';
import { Slider } from './slider/slider';
import { LoginNow } from './loginNow/loginNow';
import { Community } from './community/community';
import { Banners } from './banners/banners';

export class MainPageView {
    private readonly header: HeaderView;
    private readonly slider: Slider;
    private readonly loginNow: LoginNow;
    private readonly community: Community;
    private readonly banners: Banners;

    constructor() {
        this.header = new HeaderView('#root');
        this.slider = new Slider('#root main');
        this.loginNow = new LoginNow('#root main');
        this.community = new Community('#root main');
        this.banners = new Banners('#root main');
    }

    public render(): void {
        this.header.createHeader();
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__content';
        root.append(main);

        // this.slider.render();
        this.loginNow.render();
        // this.community.render();
        this.banners.render();
    }
}
