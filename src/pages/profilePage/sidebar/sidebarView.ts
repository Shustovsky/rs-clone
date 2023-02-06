import './sidebar.scss';
import { IMockDataAccount } from '../../../mock/mockData';

export class SidebarView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(mockDataAccount: IMockDataAccount) {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const sidebar = <HTMLDivElement>document.createElement('div');
        sidebar.className = 'sidebar_wrapper';
        sidebar.innerHTML = this.createSidebar(mockDataAccount);
        root.append(sidebar);
    }

    private createSidebar(mockDataAccount: IMockDataAccount) {
        return `<div class="profile_sidebar_basic uk-flex uk-flex-center uk-flex-column">
        <div class="account-img"></div>
        <h2>${mockDataAccount.name}</h2>
        <div class="profile-sidebar_info uk-flex uk-flex-middle">
          <span class="padding-right"><strong>0</strong> TRAC Score</span><hr class="uk-divider-vertical"><span>${mockDataAccount.location}</span>
        </div>
      </div>
      <div class="profile-sidebar-cathegories">
        <a href="*" class="profile-sidebar_link uk-link">
          <div class="profile-sidebar-cathegory checked">ACTIVITIES</div>
        </a>
        <a href="*" class="profile-sidebar_link uk-link">
          <div class="profile-sidebar-cathegory unchecked">ACCOUNT</div>
        </a>
      </div>
    `;
    }
}
