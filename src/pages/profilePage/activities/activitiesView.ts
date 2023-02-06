import '../activities/activities.scss';
import { Workout } from '../../../model/Workout';

export class ActivitiesView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(mockData: Workout[]) {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const activities = <HTMLDivElement>document.createElement('div');
        activities.className = 'activities_wrapper uk-container';
        const title = document.createElement('h1');
        title.textContent = 'ACTIVITIES';
        title.className = 'activities uk-article-title uk-text-bold';
        activities.innerHTML = `<div class="activities_stats uk-flex uk-flex-center uk-flex-middle">${this.createStatsItems(
            mockData
        )}</div>`;
        activities.insertBefore(title, activities.firstChild);
        root.append(activities);
    }

    private createStatsItem(title: string, value: string, isDivider: boolean): string {
        const row = `<div class="activities_stats_item uk-flex uk-flex-column uk-flex-middle">
      <div class="uk-text-bold activity_value activities_activity_value">${value}</div>
      <div class="activities_cathegory">${title}</div>
  </div>`;
        return isDivider ? `<hr class="uk-divider-vertical">${row}` : row;
    }

    private createStatsItems(mockData: Workout[]): string {
        const durationArr = mockData.map((workout: Workout): number => workout.duration) as number[];
        const duration = durationArr.reduce(
            (workoutPrev: number, workoutNext: number): number => workoutPrev + workoutNext
        );
        const durationTime = `${Math.floor(duration / 60)}h ${Math.round(duration % 60)}min`;
        const parameters = [
            { title: 'ACTIVITY', value: `${mockData.length}` },
            { title: 'RUNNING DISTANCE', value: '0.0km' },
            { title: 'WORKOUT TIME', value: `${durationTime}` },
            { title: 'KCAL BURNED', value: '0' },
            { title: 'TRAC SCORE', value: '0' },
        ];

        const statColumns = parameters
            .map((stat, index) => this.createStatsItem(stat.title, stat.value, index !== 0))
            .join('');
        return statColumns;
    }
}
