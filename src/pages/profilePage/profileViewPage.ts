import { HeaderView } from '../../components/header/headerView';
import { ActivitiesView } from './activities/activitiesView';
import { AccountView } from './account/account';
import { SidebarView } from './sidebar/sidebarView';
import { account } from '../../mock/mockData';
import { AccountDeleteView } from './accountDelete/accountDeletView';
import { SwitcherView } from './switcher/switcherView';

export class ProfilePageView {
    private readonly header: HeaderView;
    private readonly activities: ActivitiesView;
    private readonly sidebar: SidebarView;
    private readonly account: AccountView;
    private readonly accountDelete: AccountDeleteView;
    private readonly switcher: SwitcherView;

    constructor() {
        this.header = new HeaderView('#root');
        this.sidebar = new SidebarView('#root main');
        this.activities = new ActivitiesView('#root main');
        this.account = new AccountView('#root main');
        this.accountDelete = new AccountDeleteView('#root main');
        this.switcher = new SwitcherView('#root main');
    }

    public render(): void {
        this.header.createHeader();
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__profile_content';
        root.append(main);
        this.sidebar.render(account);
        this.switcher.render();
    }
}
