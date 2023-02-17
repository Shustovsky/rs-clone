import './sidebar.scss';
import { IAccount } from '../../../mock/mockData';
import { t } from 'i18next';

export class SidebarView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(account: IAccount) {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const sidebar = <HTMLDivElement>document.createElement('div');
        sidebar.className = 'sidebar_wrapper';
        sidebar.innerHTML = this.createSidebar(account);
        root.append(sidebar);
    }

    private createSidebar(account: IAccount) {
        return `<div class="profile_sidebar_basic uk-flex uk-flex-center uk-flex-column">
        <div class="account-img"></div>
        <h2 class="profile_sidebar_name">${account.name}</h2>
        <div class="profile-sidebar_info uk-flex uk-flex-middle">
          <span class="padding-right"><strong>0</strong> ${t(
              'profile.score'
          )}</span><hr class="uk-divider-vertical"><span>${account.location}</span>
        </div>
      </div>
    `;
    }
}
