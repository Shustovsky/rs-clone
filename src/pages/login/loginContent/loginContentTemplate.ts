import { t } from 'i18next';

export const loginContentTemplate = (): string => {
    return `
        <div class="login__content">
            <ul uk-tab class="uk-flex-center">
                <li><a href="#">${t('login.log_in')}</a></li>
                <li><a href="#">${t('login.sign_up')}</a></li>
            </ul>
            <ul class="uk-switcher uk-margin ">
                <li class="uk-animation-slide-top-medium">
                    <form class="login_form uk-flex uk-flex-column">
                        <input id="login_email" class="uk-input" type="email" placeholder="${t(
                            'login.e-mail'
                        )}" aria-label="uk-width-1-2">
                        <input id="login_password" class="uk-input" type="password" placeholder="${t(
                            'login.password'
                        )}" aria-label="uk-width-1-2">
        <!--                <a href="/forgot-password" class="login__password">Forgot password?</a>-->
                        <button id="login_submit" type="submit" class="login_btn uk-button uk-button-default">
                            ${t('login.log_in')}
                        </button>
                        <a href="/" class="login_back uk-link-reset">${t('login.back')}</a>
                    </form>
                </li>
                <li class="uk-animation-slide-top-medium">
                    <form class="login_form uk-flex uk-flex-column">
                        <input id="signup_email" class="uk-input" type="email" placeholder="${t(
                            'login.e-mail'
                        )}" aria-label="uk-width-1-2">
                        <input id="signup_password" class="uk-input" type="password" placeholder="${t(
                            'login.password'
                        )}" aria-label="uk-width-1-2">
                        <input id="signup_password-repeat" class="uk-input" type="password" placeholder="${t(
                            'login.password_repeat'
                        )}" aria-label="uk-width-1-2">
                        <button id="signup_submit" type="submit" class="login_btn uk-button uk-button-default">
                            ${t('login.sign_up')}
                        </button>
                        <div class="login_checkbox">
                            <input id="termsAndPrivacy" class="uk-checkbox" type="checkbox" required>
                            <label for="termsAndPrivacy">${t('login.agree_terms')}</label>
                        </div>
                        <div class="login_checkbox">
                            <input id="advertisement" class="uk-checkbox" type="checkbox">
                            <label for="advertisement">${t('login.agree_receive')}</label>
                        </div>
                        <div class="login_checkbox">
                            <input id="offers" class="uk-checkbox" type="checkbox">
                            <label for="offers">${t('login.agree_offers')}</label>
                        </div>
                        <a href="/" class="login_back uk-link-reset">${t('login.back')}</a>
                    </form>
                </li>
            </ul>
        </div>`;
};
