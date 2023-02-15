import { headerTemplate } from './headerTemplate';
import './header.scss';
import i18next from 'i18next';
import { SearchParams } from '../../utils/language';

export class HeaderView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public createHeader(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const header = <HTMLElement>document.createElement('nav');
        header.className = 'header__nav';
        header.innerHTML = headerTemplate();
        root.append(header);

        this.changeLanguage();
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
}
