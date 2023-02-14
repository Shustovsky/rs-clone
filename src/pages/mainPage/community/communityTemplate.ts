import { t } from 'i18next';

import people1 from '../../../assets/img/peoples/1.jpg';
import people2 from '../../../assets/img/peoples/2.jpg';
import people3 from '../../../assets/img/peoples/3.jpg';
import people4 from '../../../assets/img/peoples/4.jpg';
import people5 from '../../../assets/img/peoples/5.jpg';
import people6 from '../../../assets/img/peoples/6.jpg';
import people7 from '../../../assets/img/peoples/7.jpg';
import people8 from '../../../assets/img/peoples/8.jpg';
import people9 from '../../../assets/img/peoples/9.jpg';
import people10 from '../../../assets/img/peoples/10.jpg';

export const communityTemplate = (): string => {
    return `
        <div class="community uk-container">
            <h4>${t('main.community_header')}</h4>
            <p>${t('main.community_paragraph')}</p>
            <div uk-slider="finite: true">
                <div class="uk-position-relative">
                    <div class="uk-slider-container uk-light">
                        <ul class="uk-slider-items uk-child-width-1-2@s uk-child-width-1-5@m uk-grid">
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-1" uk-toggle>
                                    <img src="${people1}" alt="people">
                                </a>
                                <div id="modal-group-1" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>

                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people1}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@_loufit <br>
                                                        - Have fun! 😬 . Est-ce que les week-ends peuvent être plus long parce
                                                        que ça passe beaucoup trop vite!
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-2" uk-toggle>
                                    <img src="${people2}" alt="people">
                                </a>
                                <div id="modal-group-2" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>

                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people2}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@_loufit <br>
                                                        - partager des photos, parce qu’on aime l’énergie dégagée, la photo et
                                                        puis, voilà. 🤓 . • #PUMATRAC - «
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-3" uk-toggle>
                                    <img src="${people3}" alt="people">
                                </a>
                                <div id="modal-group-3" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>

                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people3}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@gokcenarikan <br>
                                                        Bugün antrenmanlar yapıldı mı bakiim 👀 Yapılmadıysa eğer kesinlikle
                                                        bahane istemiyorum akşam eve
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-4" uk-toggle>
                                    <img src="${people4}" alt="people">
                                </a>
                                <div id="modal-group-4" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>
                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people4}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@kuzmanovicnemanja <br>
                                                        #pumatrac #strongertogether @pumaperformance @pumafootball 🔥🔥🔥
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-5" uk-toggle>
                                    <img src="${people5}" alt="people">
                                </a>
                                <div id="modal-group-5" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>
                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people5}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@pilates_body <br>
                                                        It’s LIVE ! Pilates Body Basics beginner workout is the first of 6 new
                                                        workouts available on the #PUMATR
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-6" uk-toggle>
                                    <img src="${people6}" alt="people">
                                </a>
                                <div id="modal-group-6" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>

                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people6}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@gokcenarikan <br>
                                                        👉🏻Ve yarışma sona erdi! Sevgili Zübeyde Şeker, PUMATRAC ile elinden
                                                        gelenin en iyisini yaptın ve en yüks
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-7" uk-toggle>
                                    <img src="${people7}" alt="people">
                                </a>
                                <div id="modal-group-7" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>
                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people7}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@pilates_body <br>
                                                        can’t think of a caption but hey 👋🏼🙃 #pilatesbody #foreverfaster
                                                        #pumafitcollective #pumatrac
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-8" uk-toggle>
                                    <img src="${people8}" alt="people">
                                </a>
                                <div id="modal-group-8" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>
                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people8}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@kuzmanovicnemanja <br>
                                                        #pumatrac #strongertogether @pumaperformance @pumafootball 🔥🔥🔥
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-9" uk-toggle>
                                    <img src="${people9}" alt="people">
                                </a>
                                <div id="modal-group-9" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>
                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people9}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@_loufit <br>
                                                        - partager des photos, parce qu’on aime l’énergie dégagée, la photo et
                                                        puis, voilà. 🤓 . • #PUMATRAC - « Rise and shine » 🔥 . La séance de sport
                                                        du soir qui fait du bien! 💪🏽 . #instapic #motivation #foreverfaster
                                                        #havefun
                                                        SHOP PUMA TRAINING
                                                        Close
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a class="uk-button uk-button-default" href="#modal-group-10" uk-toggle>
                                    <img src="${people10}" alt="people">
                                </a>
                                <div id="modal-group-10" class="uk-modal-container uk-flex-top " uk-modal>
                                    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical ">
                                        <button class="uk-modal-close-default" type="button" uk-close></button>
                                        <div class="modal__container uk-grid uk-grid-divider uk-flex-center">
                                            <div class="modal__container_img uk-width-1-2@m">
                                                <img src="${people10}" alt="people">
                                                <div class="modal__container_dscr">
                                                    <p>@_loufit <br>
                                                        - Have fun! 😬 . Est-ce que les week-ends peuvent être plus long parce
                                                        que ça passe beaucoup trop vite!
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="modal__container_button uk-width-1-3@m">
                                                <a class="header__nav_login uk-button uk-button-default"
                                                   href="https://go.puma.com/svobs-ci-kf">${t(
                                                       'main.community_shop'
                                                   )}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="uk-visible@s">
                        <a class="uk-position-center-left-out uk-position-small uk-slidenav-large" href="#" uk-slidenav-previous
                           uk-slider-item="previous"></a>
                        <a class="uk-position-center-right-out uk-position-small uk-slidenav-large" href="#" uk-slidenav-next
                           uk-slider-item="next"></a>
                    </div>

                </div>
            </div>
        </div>`;
};
