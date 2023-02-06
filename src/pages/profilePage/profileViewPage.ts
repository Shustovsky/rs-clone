import { HeaderView } from '../../components/header/headerView';
import { ActivitiesView } from './activities/activitiesView';
<<<<<<< HEAD
import { SidebarView } from './sidebar/sidebarView';
=======
import { mockData } from '../../mock/mockData';
>>>>>>> 87bfdad85c9ab9376a73e73956c74d2abb069c29

export class ProfilePageView {
    private readonly header: HeaderView;
    private readonly activities: ActivitiesView;
    private readonly sidebar: SidebarView;

    constructor() {
        this.header = new HeaderView('#root');
        this.activities = new ActivitiesView('#root main');
        this.sidebar = new SidebarView('#root main');
    }

    public render(): void {
        this.header.createHeader();
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__profile_content';
        root.append(main);
<<<<<<< HEAD
        this.activities.render();
        this.sidebar.render();
=======
        this.activities.render(mockData);
>>>>>>> 87bfdad85c9ab9376a73e73956c74d2abb069c29
    }
}
