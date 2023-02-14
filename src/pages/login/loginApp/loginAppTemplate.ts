import { t } from 'i18next';
import phoneWatch from '../../../assets/img/phone-watch.png';
import appStore from '../../../assets/icons/appstore.svg';
import playStore from '../../../assets/icons/play-store.svg';

export const loginAppTemplate = (): string => {
    return `
        <div class="login__app uk-flex uk-flex-column uk-flex-center uk-flex-middle">
            <img class="login__app_img" src="${phoneWatch}" alt="phone watch">
            <h5>${t('login.app_over')}</h5>
            <p>${t('login.app_ai')}</p>
            <div class="stores uk-flex">
                <a href="https://play.google.com/store/apps/details?id=com.pumapumatrac"
                   title="${t('main.googlePlay')}" target="_blank">
                    <img src="${playStore}" alt="play store">
                </a>
                <a href="https://apps.apple.com/us/app/pumatrac-training-running/id698298978"
                   title="${t('main.appStore')}" target="_blank">
                    <img src="${appStore}" alt="app store">
                </a>
            </div>
            <p class="small">${t('login.app_available')}</p>
        </div>`;
};
