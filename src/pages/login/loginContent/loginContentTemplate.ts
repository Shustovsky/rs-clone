import { t } from 'i18next';

export const loginContentTemplate = (): string => {
    return `
        <div class="login__content">
            <ul uk-tab class="uk-flex-center">
                <li><a href="#">${t('login.logIn')}</a></li>
                <li><a href="#">${t('login.signUp')}</a></li>
            </ul>
            <ul class="uk-switcher uk-margin ">
                <li class="uk-animation-slide-top-medium">
                    <form class="login_form uk-flex uk-flex-column">
                        <input id="login_email" class="uk-input" type="email" placeholder="${t(
                            'login.eMail'
                        )}" aria-label="uk-width-1-2">
                        <input id="login_password" class="uk-input" type="password" placeholder="${t(
                            'login.password'
                        )}" aria-label="uk-width-1-2">
        <!--                <a href="/forgot-password" class="login__password">Forgot password?</a>-->
                        <button id="login_submit" type="submit" class="login_btn uk-button uk-button-default">
                            ${t('login.logIn')}
                        </button>
                        <a href="/" class="login_back uk-link-reset">${t('login.back')}</a>
                    </form>
                </li>
                <li class="uk-animation-slide-top-medium">
                    <form class="login_form uk-flex uk-flex-column">
                        <input id="signup_email" class="uk-input" type="email" placeholder="${t(
                            'login.eMail'
                        )}" aria-label="uk-width-1-2">
                        <input id="signup_password" class="uk-input" type="password" placeholder="${t(
                            'login.password'
                        )}" aria-label="uk-width-1-2">
                        <input id="signup_password-repeat" class="uk-input" type="password" placeholder="${t(
                            'login.passwordRepeat'
                        )}" aria-label="uk-width-1-2">
                        <button id="signup_submit" type="submit" class="login_btn uk-button uk-button-default">
                            ${t('login.signUp')}
                        </button>
                        <div class="login_checkbox">
                            <input id="termsAndPrivacy" class="uk-checkbox" type="checkbox" required>
                            <label for="termsAndPrivacy">${t(
                                'login.agreeTermsPart1'
                            )} <a href="https://pumatrac.puma.com/terms/" target="_blank">${t(
        'login.agreeTermsPart2'
    )}</a> ${t('login.agreeTermsPart3')} <a href="https://pumatrac.puma.com/privacy/" target="_blank">${t(
        'login.agreeTermsPart4'
    )}</a>${t('login.agreeTermsPart5')}</label>
                        </div>
                        <div class="login_checkbox">
                            <input id="advertisement" class="uk-checkbox" type="checkbox">
                            <label for="advertisement">${t('login.agreeReceive')}</label>
                        </div>
                        <div class="login_checkbox">
                            <input id="offers" class="uk-checkbox" type="checkbox">
                            <label for="offers">${t('login.agreeOffers')}</label>
                        </div>
                        <a href="/" class="login_back uk-link-reset">${t('login.back')}</a>
                    </form>
                </li>
            </ul>
        </div>`;
};
