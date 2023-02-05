import '../activities/activities.scss';
import { mockData } from '../../../mock/mockData';
import { IMockData } from '../../../mock/mockData';

export class ActivitiesView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render() {
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
        if (isDivider) {
            return `<div class="activities_stats_item uk-flex uk-flex-column uk-flex-middle">
          <div class="uk-text-bold activity_value activities_activity_value">${value}</div>
          <div class="activities_cathegory">${title}</div>
      </div>
      <hr class="uk-divider-vertical">`;
        }
        return `<div class="activities_stats_item uk-flex uk-flex-column uk-flex-middle">
        <div class="uk-text-bold activity_value activities_activity_value">${value}</div>
        <div class="activities_cathegory">${title}</div>
    </div>`;
    }

    private createStatsItems(mockData: IMockData[]): string {
        const durationArr = mockData.map((workout: IMockData): number => workout.duration) as number[];
        const duration = durationArr.reduce(
            (workoutPrev: number, workoutNext: number): number => workoutPrev + workoutNext
        );
        const durationTime = `${Math.floor(duration / 60)}h ${Math.round(duration % 60)}min`;
        const parametres = [
            { title: 'ACTIVITY', value: `${mockData.length}`, isDivider: true },
            { title: 'RUNNING DISTANCE', value: '0.0km', isDivider: true },
            { title: 'WORKOUT TIME', value: `${durationTime}`, isDivider: true },
            { title: 'KCAL BURNED', value: '0', isDivider: true },
            { title: 'TRAC SCORE', value: '0', isDivider: false },
        ];

        const statColumns = parametres
            .map((stat) => this.createStatsItem(stat.title, stat.value, stat.isDivider))
            .join('');
        return statColumns;
    }
}
