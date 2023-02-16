import '../activities/activities.scss';
import { Workout } from '../../../model/Workout';
import { IWorkoutsDone } from '../../../mock/mockData';
import { workoutsDone } from '../../../mock/mockData';

export class ActivitiesView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render(mockData: Workout[]) {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const activities = <HTMLDivElement>document.createElement('div');
        activities.className = 'activities_wrapper';
        const title = document.createElement('h1');
        title.textContent = 'ACTIVITIES';
        title.className = 'activities uk-article-title uk-text-bold';
        activities.innerHTML = `<div class="activities_stats uk-flex uk-flex-center uk-flex-middle">${this.createStatsItems(
            mockData
        )}</div>`;
        activities.insertBefore(title, activities.firstChild);
        root.append(activities);
        const monthWorkouts = <HTMLDivElement>document.createElement('div');
        monthWorkouts.className = 'activities_month';
        monthWorkouts.innerHTML = this.createHistoryTrainingsBlock(workoutsDone);
        root.append(monthWorkouts);
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

    private createMonthHistoryTotal(date: Date): string {
        return `<div class="wrapper_activities_month_total_items" data-att=${date.getMonth() + date.getFullYear()}>
        <div class="activities_month_total">
      <div class="activities_month_column uk-text-bold">
          ${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}
      </div>
      <div class="activities_month_column uk-text-bold">
  
      </div>
      <div class="activities_month_column uk-text-bold uk-flex uk-flex-middle uk-flex-center invisible_col">
          0,0km
      </div>
      <div class="activities_month_column  uk-text-bold uk-flex uk-flex-middle uk-flex-center invisible_col activities_duration" data-att=${
          date.getMonth() + date.getFullYear()
      }>
          0
      </div>
      <div class="activities_month_column  uk-text-bold uk-flex uk-flex-middle uk-flex-center invisible_col">
          0kcal
      </div>
      <div class="activities_month_column  uk-text-bold uk-flex uk-flex-middle uk-flex-center invisible_col">
          0 TRAC Score
      </div>
  </div>
  </div>
  <hr class="uk-hr">`;
    }

    private createTrainingBlock(duration: number, date: Date, coverImageUrl: string, title: string) {
        return `<div class="activities_month_items">
        <a href="/" class="uk-flex activity_link activities_month_item">
            <div class="activities_month_img">
                <img src=${coverImageUrl} alt="workout_image" class="activities_img">
            </div>
            <div class="activities_info uk-flex uk-flex-middle uk-flex-center uk-flex-column">
                <div class="activities_title uk-text-bold">${title}</div>
                <div class="activities_date">${date.toLocaleString('en-US')}</div>
            </div>
        </a>
        <div class="activities_month_item">
        </div>
        <div class="activities_month_item">
        </div>
        <div class="activities_month_item uk-flex uk-flex-center uk-flex-middle invisible_col" data-att=${
            date.getMonth() + date.getFullYear()
        }>
        ${duration}
        </div>
        <div class="activities_month_item uk-flex uk-flex-center uk-flex-middle invisible_col">
            0kcal
        </div>
        <div class="activities_month_item uk-flex uk-flex-center uk-flex-middle invisible_col">
            0 TRAC Score
        </div>
    </div>
    <hr class="uk-hr">`;
    }

    private createHistoryTrainingsBlock(workoutsDone: IWorkoutsDone[]): string {
        workoutsDone.sort((a, b) => b.date.getTime() - a.date.getTime());
        const emptyArr: number[] = [];
        const monthTotalBlock = workoutsDone
            .map((x) => {
                if (emptyArr.length === 0 || !emptyArr.includes(x.date.getMonth() + x.date.getFullYear())) {
                    emptyArr.push(x.date.getMonth() + x.date.getFullYear());
                    return (
                        this.createMonthHistoryTotal(x.date) +
                        this.createTrainingBlock(x.duration, x.date, x.coverImageUrl, x.title)
                    );
                } else {
                    return this.createTrainingBlock(x.duration, x.date, x.coverImageUrl, x.title);
                }
            })
            .join('');
        return monthTotalBlock;
    }
}
