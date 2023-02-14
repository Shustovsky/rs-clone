import { t } from 'i18next';

export const loginNowTemplate = (): string => {
    return `
        <div class="login-now uk-container">
            <p class="login-now_text">${t('main.login_now')}</p>
            <button class="bold login-now_btn uk-button uk-button-default">
                ${t('header.login')}
                <span uk-icon="user"></span>
            </button>
        </div>`;
};
