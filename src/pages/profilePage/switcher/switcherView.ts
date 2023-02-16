import { ActivitiesView } from '../activities/activitiesView';
import { AccountView } from '../account/account';
import { mockData } from '../../../mock/mockData';
import { account } from '../../../mock/mockData';
import { AccountDeleteView } from '../accountDelete/accountDeletView';
import { LogoutView } from '../logout/logoutView';
import { SidebarView } from '../sidebar/sidebarView';
import { Footer } from '../../../components/footer/footer';

import '../switcher/switcher.scss';

export class SwitcherView {
    private readonly activities: ActivitiesView;
    private readonly account: AccountView;
    private readonly accountDelete: AccountDeleteView;
    private readonly logout: LogoutView;
    private readonly sidebar: SidebarView;
    private readonly footer: Footer;
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
        this.activities = new ActivitiesView('#root main');
        this.account = new AccountView('#root main');
        this.accountDelete = new AccountDeleteView('#root main');
        this.logout = new LogoutView('#root main');
        this.sidebar = new SidebarView('#root main');
        this.footer = new Footer('#root');
    }

    public render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const switcher = <HTMLDivElement>document.createElement('div');
        switcher.className = 'switcher_wrapper';
        this.sidebar.render(account);
        this.activities.render(mockData);
        this.account.render(account);
        this.accountDelete.render(account);
        this.logout.render();
        this.footer.render();
        const accountWrapper = <HTMLDivElement>document.querySelector('.account_wrapper');
        const activitiesWrapper = <HTMLDivElement>document.querySelector('.activities_wrapper');
        const accountDeleteWrapper = <HTMLDivElement>document.querySelector('.accountDelete_wrapper');

        switcher.innerHTML = `<div class="uk-child-width-1-1@s uk-grid">
        <div>
            <div uk-grid>
                <div class="uk-width-auto@m profile_tabs">
                    <ul class="uk-tab-right margin_reset" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                        <li><a href="#" class="tabs_padding">ACTIVITIES</a></li>
                        <li><a href="#" class="tabs_padding">ACCOUNT</a></li>
                        <li><a href="#" class="tabs_padding">DELETE ACCOUNT</a></li>
                    </ul>
                </div>
                <div class="uk-width-expand@m main_content_switcher">
                    <ul id="component-tab-left" class="uk-switcher margin_reset">
                        <li class="li_activities"></li>
                        <li class="li_account"></li>
                        <li class="li_account_delete"></li>
                    </ul>
                </div>
            </div>
        </div>
        <div>`;
        root.append(switcher);
        const liActivities = <HTMLLIElement>document.querySelector('.li_activities');
        const historyWorkout = <HTMLDivElement>document.querySelector('.activities_month');
        liActivities.append(activitiesWrapper, historyWorkout);
        const liAccount = <HTMLLIElement>document.querySelector('.li_account');
        liAccount.append(accountWrapper);
        const liAccountDelete = <HTMLLIElement>document.querySelector('.li_account_delete');
        liAccountDelete.append(accountDeleteWrapper);
        const tabsWrapper = <HTMLDivElement>document.querySelector('.profile_tabs');
        const logoutBtn = <HTMLDivElement>document.querySelector('.btn_logout_container');
        const sidebarWrapper = <HTMLDivElement>document.querySelector('.profile_sidebar_basic');
        tabsWrapper.insertBefore(sidebarWrapper, tabsWrapper.firstChild);
        tabsWrapper.append(logoutBtn);
        const footer = <HTMLElement>document.querySelector('.footer');
        const mainContent = <HTMLDivElement>document.querySelector('.main_content_switcher');
        mainContent.append(footer);
    }
}
