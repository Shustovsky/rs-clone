import { HeaderView } from '../../components/header/headerView';
import { ActivitiesView } from './activities/activitiesView';
import { AccountView } from './account/account';
import { mockData } from '../../mock/mockData';
import { SidebarView } from './sidebar/sidebarView';
import { account } from '../../mock/mockData';

export class ProfilePageView {
    private readonly header: HeaderView;
    private readonly activities: ActivitiesView;
    private readonly sidebar: SidebarView;
    private readonly account: AccountView;

    constructor() {
        this.header = new HeaderView('#root');
        this.sidebar = new SidebarView('#root main');
        this.activities = new ActivitiesView('#root main');
        this.account = new AccountView('#root main');
    }

    public render(): void {
        this.header.createHeader();
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__profile_content';
        root.append(main);
        this.sidebar.render(account);
        this.activities.render(mockData);
        this.account.render(account);
    }
}
