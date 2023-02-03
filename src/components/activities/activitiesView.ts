import './activities.scss';
import activitiesTemplate from './activities.html';

export class ActivitiesView {
    public render() {
        const activities = document.createElement('div');
        activities.classList.add('activities_wrapper');
        activities.classList.add('uk-container');
        activities.innerHTML = activitiesTemplate;
        document.body.append(activities);
    }
}
