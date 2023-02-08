import './sidebar.scss';
import { IAccount } from '../../../mock/mockData';

export class SidebarView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(Account: IAccount) {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const sidebar = <HTMLDivElement>document.createElement('div');
        sidebar.className = 'sidebar_wrapper';
        sidebar.innerHTML = this.createSidebar(Account);
        root.append(sidebar);
    }

    private createSidebar(Account: IAccount) {
        return `<div class="profile_sidebar_basic uk-flex uk-flex-center uk-flex-column">
        <div class="account-img"></div>
        <h2>${Account.name}</h2>
        <div class="profile-sidebar_info uk-flex uk-flex-middle">
          <span class="padding-right"><strong>0</strong> TRAC Score</span><hr class="uk-divider-vertical"><span>${Account.location}</span>
        </div>
      </div>
    `;
    }
}
