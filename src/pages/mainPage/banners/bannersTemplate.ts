import { t } from 'i18next';
import phoneWatch from '../../../assets/img/phone-watch.png';
import appStore from '../../../assets/icons/appstore.svg';
import playStore from '../../../assets/icons/play-store.svg';
import bgBanner1 from '../../../assets/img/bg-download.jpg';
import bgBanner2 from '../../../assets/img/bg_banner2.jpg';

export const bannersTemplate = (): string => {
    return `
        <div class="banners uk-container">
            <div class="banners_container" uk-grid>
                <div class="banners__item uk-width-1-2">
                    <div
                        class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-grid-small"
                        data-src="${bgBanner1}" uk-img>
                        <div class="banners__item_img">
                            <img src="${phoneWatch}" alt="phoneWatch">
                        </div>
                        <div class="banners__item_dscr uk-flex uk-flex-column uk-flex-center uk-flex-left">
                            <h3>${t('main.download_now')}</h3>
                            <p>${t('main.banners_over')}</p>
                            <div class="stores uk-flex uk-grid-small">
                                <a href="https://apps.apple.com/us/app/pumatrac-training-running/id698298978"
                                   title="${t('main.appStore')}" target="_blank">
                                    <img src="${appStore}" alt="App Store">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.pumapumatrac"
                                   title="${t('main.googlePlay')}" target="_blank">
                                    <img src="${playStore}" alt="Google Play">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banners__item uk-width-1-2">
                    <div class="uk-height-medium uk-flex uk-flex-right uk-flex-middle uk-background-cover uk-light"
                         data-src="${bgBanner2}" uk-img>
                        <div class="banners__item_wrapper uk-flex uk-flex-right">
                            <div class="banners__item_dscr uk-flex uk-flex-column uk-flex-center ">
                                <h3>${t('main.banners_train')}</h3>
                                <p>${t('main.banners_gear')}</p>
                                <a class="banners__item_btn uk-button uk-button-default" href="https://go.puma.com/svobs-ci">
                                    ${t('main.shop_now')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
};
