import './sidebar.scss';
import { mockDataAccount } from '../../../mock/mockData';
import { IMockDataAccount } from '../../../mock/mockData';

export class SidebarView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render() {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const sidebar = <HTMLDivElement>document.createElement('div');
        sidebar.className = 'sidebar_wrapper uk-container';
        sidebar.innerHTML = this.createSidebar(mockDataAccount);
        root.append(sidebar);
    }

    private createSidebar(mockDataAccount: IMockDataAccount) {
        return `<div class="profile_sidebar uk-flex uk-flex-center uk-flex-middle uk-flex-column">
      <div class="account-img"></div>
      <h2>${mockDataAccount.name}</h2>
      <div class="profile-sidebar_info uk-flex uk-flex-center uk-flex-middle">
        <span class="padding-right"><strong>0</strong> TRAC Score</span><hr class="uk-divider-vertical"><span>${mockDataAccount.location}</span>
      </div>
    </div>`;
    }
}
