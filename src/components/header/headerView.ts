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
        this.initMainLinkListener();
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

    private initMainLinkListener(): void {
        const mainLink = <HTMLLinkElement>document.querySelector('.header__nav_main-link');
        mainLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.router.redirectToMain();
        });
    }

    public addUnlogginedBtn(): void {
        const headerNav = <HTMLDivElement>document.querySelector('.header__nav_right-panel');
        const loginBtn = document.createElement('button');
        loginBtn.className = 'header__nav_login uk-button uk-button-default';
        loginBtn.innerHTML = i18next.t('header.login');
        loginBtn.addEventListener('click', () => {
            this.router.redirectToLogin();
        });

        const userIcon = document.createElement('span');
        userIcon.setAttribute('uk-icon', 'user');
        loginBtn.append(userIcon);

        headerNav.prepend(loginBtn);
    }

    public addLogginedBtn(): void {
        const headerNav = <HTMLDivElement>document.querySelector('.header__nav_right-panel');
        const profileLink = document.createElement('a');
        profileLink.className = 'header__nav_profile';

        const userIcon = document.createElement('span');
        userIcon.setAttribute('uk-icon', 'user');
        profileLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.router.redirectToProfile();
        });
        profileLink.append(userIcon);
        headerNav.prepend(profileLink);
    }

    public addLogginedBtnAfter(): void {
        const profileLink = <HTMLDivElement>document.querySelector('.header__nav_profile');
        profileLink.classList.add('header__nav_profile-active');
    }
}
