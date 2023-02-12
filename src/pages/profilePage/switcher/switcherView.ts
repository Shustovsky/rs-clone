import { ActivitiesView } from '../activities/activitiesView';
import { AccountView } from '../account/account';
import { mockData } from '../../../mock/mockData';
import { account } from '../../../mock/mockData';
import { AccountDeleteView } from '../accountDelete/accountDeletView';
import '../switcher/switcher.scss';

export class SwitcherView {
    private readonly activities: ActivitiesView;
    private readonly account: AccountView;
    private readonly accountDelete: AccountDeleteView;
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
        this.activities = new ActivitiesView('#root main');
        this.account = new AccountView('#root main');
        this.accountDelete = new AccountDeleteView('#root main');
    }

    public render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const switcher = <HTMLDivElement>document.createElement('div');
        switcher.className = 'switcher_wrapper';

        this.activities.render(mockData);
        this.account.render(account);
        this.accountDelete.render(account);
        const accountWrapper = document.querySelector('.account_wrapper') as HTMLDivElement;
        const activitiesWrapper = document.querySelector('.activities_wrapper') as HTMLDivElement;
        const accountDeleteWrapper = document.querySelector('.accountDelete_wrapper') as HTMLDivElement;

        switcher.innerHTML = `<div class="uk-child-width-1-1@s" uk-grid>
        <div>
            <div uk-grid>
                <div class="uk-width-auto@m profile_tabs">
                    <ul class="uk-tab-right" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                        <li><a href="#" class="tabs_padding">ACTIVITIES</a></li>
                        <li><a href="#" class="tabs_padding">ACCOUNT</a></li>
                        <li><a href="#" class="tabs_padding">DELETE ACCOUNT</a></li>
                    </ul>
                </div>
                <div class="uk-width-expand@m">
                    <ul id="component-tab-left" class="uk-switcher">
                        <li class="li_activities"></li>
                        <li class="li_account"></li>
                        <li class="li_account_delete"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div>`;
        root.append(switcher);
        const liActivities = document.querySelector('.li_activities') as HTMLLIElement;
        liActivities.append(activitiesWrapper);
        const liAccount = document.querySelector('.li_account') as HTMLLIElement;
        liAccount.append(accountWrapper);
        const liAccountDelete = document.querySelector('.li_account_delete') as HTMLLIElement;
        liAccountDelete.append(accountDeleteWrapper);
    }
}
