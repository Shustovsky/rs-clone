import { t } from 'i18next';
import logo from '../../assets/icons/logo.svg';

export const headerTemplate = (): string => {
    return `
        <a class="header__nav_link uk-button uk-button-default" href="https://go.puma.com/koswb" target="_blank">
        ${t('header.shop')} </a>
        <a class="header__nav_main-link" href="/">
            <img class="header__nav_logo" src="${logo}" alt="puma logo">
        </a>
        <div class="header__nav_right-panel">
             <button class="header__nav_lang uk-button uk-button-default">
                ${t('header.lang')}
            </button>
        </div>`;
};
