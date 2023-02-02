import headerTemplate from './mainPage.html';
import './mainPage.scss';

export class MainPageView {
    public createMainPage() {
        const header = <HTMLElement>document.querySelector('.header__nav');
        const main = document.createElement('main');
        main.className = 'main__content';
        main.innerHTML = headerTemplate;
        header.after(main);
    }
}
