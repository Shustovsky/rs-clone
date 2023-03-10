import '../activities/activities.scss';
import i18next, { t } from 'i18next';
import { ProfileWorkout } from '../../../model/Profile';

export class ActivitiesView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workouts: ProfileWorkout[] = []): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const activities = <HTMLDivElement>document.createElement('div');
        activities.className = 'activities_wrapper';

        const title = document.createElement('h1');
        title.textContent = t('profile.activities');
        title.className = 'activities uk-article-title uk-text-bold';

        activities.innerHTML = `<div class="activities_stats uk-flex uk-flex-center">
                                    ${this.createStatsItems(workouts)}
                                </div>`;
        activities.insertBefore(title, activities.firstChild);
        root.append(activities);

        const monthWorkouts = <HTMLDivElement>document.createElement('div');
        monthWorkouts.className = 'activities_month';
        monthWorkouts.innerHTML = this.createHistoryTrainingsBlock(workouts);
        root.append(monthWorkouts);

        const monthTotalDuration = Array.from(document.querySelectorAll('.activities_duration'));
        const arrD: any[][] = [];
        monthTotalDuration.map((x) => {
            arrD.push(
                workouts.filter(
                    (y) =>
                        new Date(y.date).getMonth().toString() + new Date(y.date).getFullYear().toString() ===
                        x.getAttribute('data-att')
                )
            );
        });
        monthTotalDuration.map((x) =>
            arrD[monthTotalDuration.indexOf(x)].length === 1
                ? (x.textContent = `${Math.floor(arrD[monthTotalDuration.indexOf(x)][0].duration / 3600)}${t(
                      'workout.h'
                  )} ${Math.round((arrD[monthTotalDuration.indexOf(x)][0].duration % 3600) / 60)}${t('workout.min')}`)
                : (x.textContent = `${Math.floor(
                      arrD[monthTotalDuration.indexOf(x)].reduce((a, b) => a.duration + b.duration) / 3600
                  )}${t('workout.h')} ${Math.round(
                      (arrD[monthTotalDuration.indexOf(x)].reduce((a, b) => a.duration + b.duration) % 3600) / 60
                  )}${t('workout.min')}`)
        );

        const monthTotalCalories = Array.from(document.querySelectorAll('.activities_calories'));
        const arrC: any[][] = [];
        monthTotalCalories.map((x) => {
            arrC.push(
                workouts.filter(
                    (y) =>
                        new Date(y.date).getMonth().toString() + new Date(y.date).getFullYear().toString() ===
                        x.getAttribute('data-att')
                )
            );
        });
        monthTotalCalories.map((x) =>
            arrC[monthTotalCalories.indexOf(x)].length === 1
                ? (x.textContent = `${arrC[monthTotalCalories.indexOf(x)][0].calories}${t('workout.kcal')}`)
                : (x.textContent = `${arrC[monthTotalCalories.indexOf(x)].reduce(
                      (a: ProfileWorkout, b: ProfileWorkout) => a.calories + b.calories
                  )}${t('workout.kcal')}`)
        );
        const monthTotalScore = Array.from(document.querySelectorAll('.activities_scores'));
        const arrS: any[][] = [];
        monthTotalScore.map((x) => {
            arrS.push(
                workouts.filter(
                    (y) =>
                        new Date(y.date).getMonth().toString() + new Date(y.date).getFullYear().toString() ===
                        x.getAttribute('data-att')
                )
            );
        });
        monthTotalScore.map((x) =>
            arrS[monthTotalScore.indexOf(x)].length === 1
                ? (x.textContent = `${arrC[monthTotalScore.indexOf(x)][0].score}${t('profile.score')}`)
                : (x.textContent = `${arrC[monthTotalScore.indexOf(x)].reduce(
                      (a: ProfileWorkout, b: ProfileWorkout) => a.score + b.score
                  )}${t('profile.score')}`)
        );
    }

    private createStatsItem(title: string, value: string, isDivider: boolean): string {
        const row = `<div class="activities_stats_item uk-flex uk-flex-column uk-flex-middle">
      <div class="uk-text-bold activity_value activities_activity_value">${value}</div>
      <div class="activities_cathegory">${title}</div>
  </div>`;
        return isDivider ? `<hr class="uk-divider-vertical">${row}` : row;
    }

    private createStatsItems(workoutsDone: ProfileWorkout[]): string {
        const durationArr: number[] = workoutsDone.map((workout: ProfileWorkout): number => workout.duration);
        const duration = durationArr.reduce((workoutPrev, workoutNext) => workoutPrev + workoutNext, 0);
        const durationTime = `${Math.floor(duration / 3600)}${t('workout.h')} ${Math.round((duration % 3600) / 60)}${t(
            'workout.min'
        )}`;
        const caloriesArr: number[] = workoutsDone.map((workout: ProfileWorkout): number => workout.calories);
        const calories = caloriesArr.reduce((workoutPrev, workoutNext) => workoutPrev + workoutNext, 0);
        const scoreArr = workoutsDone.map((workout) => workout.score);
        const scores = scoreArr.reduce((workoutPrev, workoutNext) => workoutPrev + workoutNext, 0);
        const parameters = [
            { title: t('profile.activity'), value: `${workoutsDone.length}` },
            { title: t('profile.runningDistance'), value: `0.0${t('workout.km')}` },
            { title: t('profile.workoutTime'), value: `${durationTime}` },
            { title: t('profile.kcalBurned'), value: `${calories}` },
            { title: t('profile.score'), value: `${scores}` },
        ];

        return parameters.map((stat, index) => this.createStatsItem(stat.title, stat.value, index !== 0)).join('');
    }

    private createMonthHistoryTotal(date: string): string {
        return `<div class="wrapper_activities_month_total_items" data-att=${
            new Date(date).getMonth().toString() + new Date(date).getFullYear().toString()
        }>
        <div class="activities_month_total">
      <div class="activities_month_column uk-text-bold">
          ${new Date(date).toLocaleString((i18next.language = 'en'), { month: 'long' })} ${new Date(date).getFullYear()}
      </div>
      <div class="activities_month_column uk-text-bold">
  
      </div>
      <div class="activities_month_column uk-text-bold uk-flex uk-flex-middle uk-flex-center invisible_col">
      ${t('workout.km')}
      </div>
      <div class="activities_month_column  uk-text-bold uk-flex uk-flex-middle uk-flex-center invisible_col activities_duration" data-att=${
          new Date(date).getMonth().toString() + new Date(date).getFullYear().toString()
      }>
          0
      </div>
      <div class="activities_month_column  uk-text-bold uk-flex uk-flex-middle uk-flex-center invisible_col activities_calories" data-att=${
          new Date(date).getMonth().toString() + new Date(date).getFullYear().toString()
      }>
          0kcal
      </div>
      <div class="activities_month_column  uk-text-bold uk-flex uk-flex-middle uk-flex-center invisible_col activities_scores" data-att=${
          new Date(date).getMonth().toString() + new Date(date).getFullYear().toString()
      }>
          0 TRAC Score
      </div>
  </div>
  </div>
  <hr class="uk-hr">`;
    }

    private createTrainingBlock(
        duration: number,
        date: string,
        coverImageUrl: string,
        title: string,
        calories: number,
        score: number,
        id: string
    ): string {
        const timeFormat: Intl.DateTimeFormatOptions = {
            month: 'numeric',
            day: '2-digit',
            year: 'numeric',
        };
        return `<div class="activities_month_items">
       <a href="/workout/${id}" class="uk-flex activity_link activities_month_item">
            <div class="activities_month_img">
                <img src=${coverImageUrl} alt="workout_image" class="activities_img">
            </div>
            <div class="activities_info uk-flex uk-flex-center uk-flex-column">
                <div class="activities_title uk-text-bold">${title}</div>
                <div class="activities_date">
                    ${new Date(date).toLocaleString(i18next.language, timeFormat)}
                </div>
            </div>
        </a>
        <div class="activities_month_item">
        </div>
        <div class="activities_month_item">
        </div>
        <div class="activities_month_item uk-flex uk-flex-center uk-flex-middle invisible_col" data-att=${
            new Date(date).getMonth().toString() + new Date(date).getFullYear().toString()
        }>
        ${Math.floor(duration / 3600)}${t('workout.h')} ${Math.round((duration % 3600) / 60)}${t('workout.min')}
        </div>
        <div class="activities_month_item uk-flex uk-flex-center uk-flex-middle invisible_col">
        ${calories}${t('workout.kcal')}
        </div>
        <div class="activities_month_item uk-flex uk-flex-center uk-flex-middle invisible_col">
        ${score}${t('profile.score')}
        </div>
    </div>
    <hr class="uk-hr">`;
    }

    private createHistoryTrainingsBlock(workoutsDone: ProfileWorkout[]): string {
        const sortedWorkouts = workoutsDone
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        const emptyArr: string[] = [];
        const monthTotalBlock = sortedWorkouts
            .map((x) => {
                if (
                    emptyArr.length === 0 ||
                    !emptyArr.includes(
                        new Date(x.date).getMonth().toString() + new Date(x.date).getFullYear().toString()
                    )
                ) {
                    emptyArr.push(new Date(x.date).getMonth().toString() + new Date(x.date).getFullYear().toString());
                    return (
                        this.createMonthHistoryTotal(x.date) +
                        this.createTrainingBlock(x.duration, x.date, x.imageUrl, x.title, x.calories, x.score, x.id)
                    );
                } else {
                    return this.createTrainingBlock(x.duration, x.date, x.imageUrl, x.title, x.calories, x.score, x.id);
                }
            })
            .join('');
        return monthTotalBlock;
    }
}
