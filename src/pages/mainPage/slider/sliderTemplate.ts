import { t } from 'i18next';
import slide1 from '../../../assets/img/slide_1.jpg';
import slide2 from '../../../assets/img/slide_2.jpg';
import slide3 from '../../../assets/img/slide_3.jpg';
import appStore from '../../../assets/icons/appstore.svg';
import playStore from '../../../assets/icons/play-store.svg';
import gadgets from '../../../assets/img/gadgets.png';

export const sliderTemplate = (): string => {
    return `
        <div class="uk-position-relative  uk-light" tabindex="-1" uk-slider="finite: true">
            <ul class="uk-slider-items">
                <li class="main-slider-item">
                    <div class="uk-panel">
                        <img class="slide_img" src="${slide1}" alt="slide 1">
                        <div class="content uk-position-center-right uk-position-large uk-text-left">
                            <h2 uk-slider-parallax="x: 100,-100">${t('main.slide1_join')}</h2>
                            <h4 uk-slider-parallax="x: 200,-200">${t('main.slide1_train')}</h4>
                            <p uk-slider-parallax="x: 200,-200">${t('main.slide1_levelUp')}</p>
                            <h4 uk-slider-parallax="x: 200,-200">${t('main.download')}</h4>
                            <div class="stores uk-flex">
                                <a href="https://apps.apple.com/us/app/pumatrac-training-running/id698298978"
                                   title="${t('main.appStore')}" target="_blank">
                                    <img src="${appStore}">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.pumapumatrac"
                                   title="${t('main.googlePlay')}" target="_blank">
                                    <img src="${playStore}">
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="main-slider-item">
                    <div class="uk-panel">
                        <img class="slide_img" src="${slide2}" alt="slide 2">
                        <img class="content_img" src="${gadgets}" alt="gadgets">
                        <div class="content uk-position-center-right uk-position-large uk-text-left">
                            <h2 class="bold" uk-slider-parallax="x: 100,-100">${t('main.slide2_workout')}</h2>
                            <h2 uk-slider-parallax="x: 100,-100">${t('main.slide2_or')}</h2>
                            <p uk-slider-parallax="x: 200,-200">${t('main.slide2_achieve')}</p>
                            <h4 uk-slider-parallax="x: 200,-200">${t('main.download')}</h4>
                           <div class="stores uk-flex">
                                <a href="https://apps.apple.com/us/app/pumatrac-training-running/id698298978"
                                   title="${t('main.appStore')}" target="_blank">
                                    <img src="${appStore}">
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.pumapumatrac"
                                   title="${t('main.googlePlay')}" target="_blank">
                                    <img src="${playStore}">
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="main-slider-item">
                    <div class="uk-panel">
                        <img class="slide_img" src="${slide3}" alt="slide 3">
                        <div class="content uk-position-center-right uk-position-large uk-text-left">
                            <h2 uk-slider-parallax="x: 100,-100">${t('main.slide3_tailored')}</h2>
                            <h4 class="bold" uk-slider-parallax="x: 200,-200">${t('main.slide3_our')}</h4>
                            <p uk-slider-parallax="x: 200,-200">${t('main.slide3_workouts')}</p>
                            <button class="content_btn uk-button uk-button-default bold">${t('main.start_now')}</button>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="uk-slider-nav uk-dotnav uk-margin uk-position-bottom-center"></ul>

            <a class="uk-slidenav-large uk-position-center-left uk-position-small " href="#" uk-slidenav-previous
               uk-slider-item="previous"></a>
            <a class="uk-slidenav-large uk-position-center-right uk-position-small " href="#" uk-slidenav-next
               uk-slider-item="next"></a>
        </div>`;
};
