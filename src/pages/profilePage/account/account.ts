import '../account/account.scss';
import { accountTemplate } from './accountTemplate';
import Litepicker from 'litepicker';
import autocomplete from 'autocompleter';
import { countries } from '../../../mock/mockData';
import { t } from 'i18next';
import { Profile } from '../../../model/Profile';

export class AccountView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(profile: Profile): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const profileContainer = <HTMLDivElement>document.createElement('div');
        profileContainer.className = 'account_wrapper';
        profileContainer.innerHTML = `<h3 class="account">${t('profile.about')}</h3>
        <p class="account_text">${t('profile.details')}</p>
        <form class="profile_form">
            <div class="form_row uk-flex form_row_margin">
                <div class="form_row_half">
                    <input 
                        class="uk-input js-profile-firstName"
                        type="text" 
                        placeholder="${t('profile.firstName')}" 
                        value=${profile.firstName || ''}
                     >
                </div>
                <div class="form_row_half">
                    <input 
                        class="uk-input js-profile-lastName" 
                        type="text" 
                        placeholder="${t('profile.lastName')}" 
                        value=${profile.lastName || ''}
                    >
                </div>
                <div class="form_row_half">
                <input class="uk-input" 
                    type="email" 
                    placeholder="${t('profile.email')}" 
                    value=${profile.email || ''} 
                    disabled
                >
                </div>
            </div>
            <div class="form_row uk-flex form_row_margin_below">
                <div class="form_row_half">
                    <input class="uk-input search_country" 
                    id="autoComplete" 
                    type="search" placeholder="${t('profile.country')}" 
                    value=${profile.location || ''}>
                </div>
                <div class="form_row_half"></div>
            </div>
            <div class="form_row uk-flex form_row_margin">
                <div class="form_row_half">
                    <select class="uk-select js-profile-gender" aria-label="Select">
                        <option disabled selected>${profile.gender ? profile.gender : t('profile.gender')}</option>
                        <option>${t('profile.male')}</option>
                        <option>${t('profile.female')}</option>
                        <option>${t('profile.nonBinary')}</option>
                    </select>
                </div>
            <div class="form_row_half">
                <input class="uk-input uk-date litepicker js-profile-birthday" 
                    type="text" 
                    placeholder="${t('profile.dateOfBirth')}"
                >
                <span class="icon_calendar" uk-icon="icon: calendar"></span>
            </div>
            </div>`;
        const profileAddition = <HTMLDivElement>document.createElement('div');
        profileAddition.innerHTML = accountTemplate(profile);
        profileContainer.append(profileAddition);
        root.append(profileContainer);
        const picker = new Litepicker({
            element: <HTMLInputElement>document.querySelector('.litepicker'),
        });

        const input = <HTMLInputElement>document.querySelector('.search_country');
        picker.setDate(profile.birthday);
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
