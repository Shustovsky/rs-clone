import '../accountDelete/accountDelete.scss';
import { IAccount } from '../../../mock/mockData';
import { t } from 'i18next';

export class AccountDeleteView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(account: IAccount) {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const accountDelete = <HTMLDivElement>document.createElement('div');
        accountDelete.className = 'accountDelete_wrapper';

        accountDelete.innerHTML = `<h3 class="account_delete_title">${t('profile.reasonDelete')}</h3>
        <div class="account_delete_reasons uk-flex uk-flex-wrap">
            <div class="account_delete_reason uk-flex uk-flex-middle">${t('profile.reasonDuplicate')}</div>
            <div class="account_delete_reason uk-flex uk-flex-middle">${t('profile.reasonNotExpected')}</div>
            <div class="account_delete_reason uk-flex uk-flex-middle">${t('profile.reasonExperience')}</div>
            <div class="account_delete_reason uk-flex uk-flex-middle">${t('profile.reasonPrivacy')}</div>
        </div>
        <div class="account_delete_other uk-flex uk-flex-middle">
            <span class="other_text">Other:</span>
            <div class="input_wrapper">
                <input type="text" class="uk-input input_background" value=${account.mail}>
            </div>
        </div>
        <h3 class="account_delete_title margin_larger">${t('profile.passwordCurrent')}</h3>
        <p class="help_title">${t('profile.enterPassword')}</p>
        <div class="form_row_half">
            <input class="uk-input input_background" type="password">
        </div>
        <hr class="uk-divider">
        <div class="account_wrapper_button">
          <button class="button_save uk-button uk-button-secondary">${t('profile.deleteAccount')}</button>
        </div>`;
        root.append(accountDelete);
    }
}
