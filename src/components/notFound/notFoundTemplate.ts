import { t } from 'i18next';

export const notFoundTemplate = (): string => {
    return `
    <div class="main_container uk-container uk-flex uk-flex-column uk-flex-middle uk-flex-center">
       <h2 class="uk-text-bold">404</h2>
       <h4 class="uk-text-large">${t('notFound.sorry')}</h4>
    </div>`;
};
