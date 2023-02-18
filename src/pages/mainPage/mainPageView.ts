import { Slider } from './slider/slider';
import { LoginNow } from './loginNow/loginNow';
import { Community } from './community/community';
import { Banners } from './banners/banners';
import { Footer } from '../../components/footer/footer';
import { Loader } from '../../components/loader/Loader';

export class MainPageView {
    private readonly slider: Slider;
    private readonly loginNow: LoginNow;
    private readonly community: Community;
    private readonly banners: Banners;
    private readonly footer: Footer;
    private readonly loader: Loader;

    constructor() {
        this.slider = new Slider('#root main');
        this.loginNow = new LoginNow('#root main');
        this.community = new Community('#root main');
        this.banners = new Banners('#root main');
        this.footer = new Footer('#root');
        this.loader = new Loader();
    }

    public async render(): Promise<void> {
        this.loader.createLoader();
        try {
            const root = <HTMLBodyElement>document.querySelector('#root');
            const main = document.createElement('main');
            main.className = 'main__content';
            root.append(main);

            this.slider.render();
            this.loginNow.render();
            this.community.render();
            this.banners.render();
            this.footer.render();
        } finally {
            this.loader.deleteLoader();
        }
    }
}
