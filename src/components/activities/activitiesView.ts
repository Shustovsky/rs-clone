import './activities.scss';
import activitiesTemplate from './activities.html';

export class ActivitiesView {
    public createActivities() {
        const activities = document.createElement('div');
        activities.classList.add('activities_wrapper');
        activities.innerHTML = activitiesTemplate;
        document.body.append(activities);
    }
}
