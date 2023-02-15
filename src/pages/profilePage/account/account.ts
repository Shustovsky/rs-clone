import '../account/account.scss';
import AccountTemplate from '../account/account.html';
import Litepicker from 'litepicker';
import autocomplete from 'autocompleter';
import { IAccount } from '../../../mock/mockData';
import { countries } from '../../../mock/mockData';

export class AccountView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(account: IAccount) {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const profile = <HTMLDivElement>document.createElement('div');
        profile.className = 'account_wrapper';
        profile.innerHTML = `<h3 class="account">ABOUT YOU</h3>
        <p class="account_text">The details you enter below will be used to calculate the calories you burn as accurately as possible, and to find events near you.</p>
        <div class="account-img_wrapper uk-flex uk-flex-middle">
            <div class="account-img"></div>
            <span class="profile_add">Add profile picture</span>
            <input type="file" class="input_add_img">
        </div>
        <form class="profile_form">
            <div class="form_row uk-flex form_row_margin">
                <div class="form_row_half">
                    <input class="uk-input" type="text" placeholder="First and last name*" value=${account.name}>
                </div>
                <div class="form_row_half">
                <input class="uk-input" type="email" placeholder="E-Mail*" value=${account.mail}>
                </div>
            </div>
            <div class="form_row uk-flex form_row_margin_below">
                <div class="form_row_half">
                    <input class="uk-input search_country" id="autoComplete" type="search" placeholder="Country*" value=${account.country}>
                </div>
                <div class="form_row_half"></div>
            </div>
            <div class="form_row uk-flex form_row_margin">
                <div class="form_row_half">
                    <select class="uk-select" aria-label="Select">
                        <option disabled selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Non binary</option>
                    </select>
                </div>
            <div class="form_row_half">
                <input class="uk-input uk-date litepicker" type="date">
                <span class="icon_calendar" uk-icon="icon: calendar"></span>
            </div>
            </div>`;
        const profileAddition = <HTMLDivElement>document.createElement('div');
        profileAddition.innerHTML = AccountTemplate;
        profile.append(profileAddition);
        root.append(profile);
        const picker = new Litepicker({
            element: document.querySelector('.litepicker') as HTMLInputElement,
        });

        const input = <HTMLInputElement>document.querySelector('.search_country');
        picker.setDate(account.birthday);
        autocomplete({
            input: input,
            fetch: function (text, update) {
                text = text.toLowerCase();
                const suggestions = countries.filter((n) => n.label.toLowerCase().startsWith(text));
                update(suggestions);
            },
            onSelect: function (item) {
                input.value = item.label as string;
            },
        });
    }
}
