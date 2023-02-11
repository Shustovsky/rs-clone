import '../accountDelete/accountDelete.scss';
import { IAccount } from '../../../mock/mockData';

export class AccountDeleteView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(account: IAccount) {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const accountDelete = <HTMLDivElement>document.createElement('div');
        accountDelete.className = 'accountDelete_wrapper uk-container';

        accountDelete.innerHTML = `<h3 class="account_delete_title">REASON FOR DELETION</h3>
        <div class="account_delete_reasons uk-flex uk-flex-wrap">
            <div class="account_delete_reason uk-flex uk-flex-middle">I have a duplicate account</div>
            <div class="account_delete_reason uk-flex uk-flex-middle">PUMATRAC was not what I expected</div>
            <div class="account_delete_reason uk-flex uk-flex-middle">I experience technical issues</div>
            <div class="account_delete_reason uk-flex uk-flex-middle">Privacy concerns</div>
        </div>
        <div class="account_delete_other uk-flex uk-flex-middle">
            <span class="other_text">Other:</span>
            <div class="input_wrapper">
                <input type="text" class="uk-input">
            </div>
        </div>
        <h3 class="account_delete_title margin_larger">CURRENT PASSWORD</h3>
        <p class="help_title">Enter your current password to verify the deletion of your account:</p>
        <div class="form_row_half">
            <input class="uk-input" type="password" value={${account.password}>
        </div>
        <hr class="uk-divider">
        <div class="account_wrapper_button">
          <button class="button_save uk-button uk-button-secondary">DELETE ACCOUNT</button>
        </div>`;
        root.append(accountDelete);
    }
}
