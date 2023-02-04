import { HeaderView } from '../../components/header/headerView';
import { ActivitiesView } from './activities/activitiesView';
import { Workout } from '../../model/Workout';

export class ProfilePageView {
    private readonly header: HeaderView;
    private readonly activities: ActivitiesView;

    constructor() {
        this.header = new HeaderView('#root');
        this.activities = new ActivitiesView('#root main');
    }

    public render(workouts: Workout[]): void {
        this.header.createHeader();
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__profile_content';
        root.append(main);
        this.activities.render();
        this.activities.createActivitiesStats(workouts);
    }
}
