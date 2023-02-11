import '../accountDelete/accountDelete.scss';
import accountDeleteTemplate from '../accountDelete/accountDelete.html';

export class AccountDeleteView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render() {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const accountDelete = <HTMLDivElement>document.createElement('div');
        accountDelete.className = 'accountDelete_wrapper uk-container';

        accountDelete.innerHTML = accountDeleteTemplate;
        root.append(accountDelete);
    }
}
