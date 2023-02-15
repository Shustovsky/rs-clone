import { t } from 'i18next';
import logo from '../../assets/icons/logo.svg';

export const headerTemplate = (): string => {
    return `
        <a class="header__nav_link uk-button uk-button-default" href="https://go.puma.com/koswb" target="_blank">
        ${t('header.shop')} </a>
        <a href="/">
            <img class="header__nav_logo" src="${logo}" alt="puma logo">
        </a>
        <div>
            <button class="header__nav_login uk-button uk-button-default">
                ${t('header.login')}
                <span uk-icon="user"></span>
            </button>
             <button class="header__nav_lang uk-button uk-button-default">
                ${t('header.lang')}
            </button>
        </div>`;
};
