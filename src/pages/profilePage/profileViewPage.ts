import { HeaderView } from '../../components/header/headerView';
import { ActivitiesView } from './activities/activitiesView';
import { AccountView } from './account/account';
import { mockData } from '../../mock/mockData';

export class ProfilePageView {
    private readonly header: HeaderView;
    private readonly activities: ActivitiesView;
    private readonly account: AccountView;

    constructor() {
        this.header = new HeaderView('#root');
        this.activities = new ActivitiesView('#root main');
        this.account = new AccountView('#root main');
    }

    public render(): void {
        this.header.createHeader();
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__profile_content';
        root.append(main);
        this.activities.render(mockData);
        this.account.render();
    }
}
