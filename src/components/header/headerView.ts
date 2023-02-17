import { headerTemplate } from './headerTemplate';
import './header.scss';
import i18next from 'i18next';
import { SearchParams } from '../../utils/language';
import { Router } from '../router/Router';

export class HeaderView {
    private readonly selector: string;
    private readonly router: Router;

    constructor(selector: string) {
        this.selector = selector;
        this.router = new Router();
    }

    public createHeader(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const header = <HTMLElement>document.createElement('nav');
        header.className = 'header__nav';
        header.innerHTML = headerTemplate();
        root.append(header);

        this.changeLanguage();
        this.initListeners();
    }

    private changeLanguage(): void {
        const btn = <HTMLButtonElement>document.querySelector('.header__nav_lang');
        btn.addEventListener('click', () => {
            const toggleLanguage = i18next.language === 'en' ? 'ru' : 'en';
            const url = new URL(window.location.href);
            url.searchParams.set(SearchParams.lang, toggleLanguage);

            history.pushState('', '', url);
            window.dispatchEvent(new Event('changeLanguage'));
        });
    }

    private initListeners(): void {
        const mainLink = <HTMLLinkElement>document.querySelector('.header__nav_main-link');
        mainLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.router.redirectToMain();
        });

        const btnLogin = <HTMLButtonElement>document.querySelector('.header__nav_login');
        btnLogin.addEventListener('click', () => {
            this.router.redirectToLogin();
        });
    }
}
