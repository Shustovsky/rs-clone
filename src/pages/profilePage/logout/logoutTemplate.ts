import { t } from 'i18next';

export const logoutTemplate = (): string => {
    return `
       <div class="btn_logout_container">
           <button class="btn_logout">${t('profile.logout')}</button>
      </div>`;
};
