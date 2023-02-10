import '../account/account.scss';
import AccountTemplate from '../account/account.html';
import Litepicker from 'litepicker';
import autocomplete from 'autocompleter';

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
        const picker = new Litepicker({
            element: document.querySelector('.litepicker') as HTMLInputElement,
        });
        const countries = [
            { label: 'United Kingdom', value: 'UK' },
            { label: 'United States', value: 'US' },
        ];

        const input = document.querySelector('.search_country');

        autocomplete({
            input: input as HTMLInputElement,
            fetch: function (text, update) {
                text = text.toLowerCase();
                const suggestions = countries.filter((n) => n.label.toLowerCase().startsWith(text));
                update(suggestions);
            },
            onSelect: function (item) {
                (input as HTMLInputElement).value = item.label as string;
            },
        });
    }
}
