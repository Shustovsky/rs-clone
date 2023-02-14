import { t } from 'i18next';

export const footerTemplate = (): string => {
    return `
    <div class="footer_container uk-container">
        <div class="uk-flex uk-flex-left uk-grid-medium">
            <div class="footer__item">© Puma 2020</div>
            <a href="https://pumatrac.puma.com/privacy/" target="_blank" class="footer__item">${t('footer.privacy')}</a>
            <a href="https://pumatrac.puma.com/terms/" target="_blank" class="footer__item">${t('footer.terms')}</a>
            <a href="mailto:pumatrachelp@puma.com" target="_blank" class="footer__item">${t('footer.contact')}</a>
            <a href="https://about.puma.com/en/imprint" target="_blank" class="footer__item">${t('footer.imprint')}</a>
            <a href="#" class="footer__item">${t('footer.cookie')}</a>
            <a href="https://pumatrac.puma.com/faq/" target="_blank" class="footer__item">${t('footer.FAQ')}</a>
            <a href="https://rs.school/js/" target="_blank" class="footer__item rsschool">
                <img src="../../assets/icons/rs_school_js.svg" alt="rs school logo">
                <div class="rsschool_drop uk-card uk-card-body uk-card-default"
                     uk-drop="animation: reveal-bottom; animate-out: true; duration: 700">
                    <a href="https://github.com/Shustovsky" target="_blank"><span uk-icon="github"></span> Shustovsky</a>
                    <a href="https://github.com/NadzeyaShu" target="_blank"><span uk-icon="github"></span> NadzeyaShu</a>
                    <a href="https://github.com/DzmitrySm" target="_blank"><span uk-icon="github"></span> DzmitrySm</a>
                    <div>© RSschool 2023</div>
                </div>
            </a>
        </div>
    </div>`;
};
