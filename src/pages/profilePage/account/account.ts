import '../account/account.scss';
import AccountTemplate from '../account/account.html';

export class AccountView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render() {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const account = <HTMLDivElement>document.createElement('div');
        account.className = 'account_wrapper uk-container';
        account.innerHTML = AccountTemplate;
        root.append(account);
    }
}
