import { Workout } from '../../model/Workout';

export class WorkoutsView {
    public drawWorkoutsPage(workouts: Workout[]) {
        const main = document.createElement('main');
        main.className = 'workouts';

        const title = this.createWorkoutsTitle(workouts);
        main.append(title);
        const workoutList = this.createWorkoutList(workouts);
        title.after(workoutList);

        document.body.append(main);
    }

    public createWorkoutsTitle(workouts: Workout[]): HTMLElement {
        const title = <HTMLElement>document.createElement('div');
        title.className = 'workouts__page-title';
        title.innerHTML = `<span class='workouts__page-title'>workouts</span>
                            <span class='workouts__count-title'>${workouts.length}</span>`;
        return title;
    }

    public createWorkoutListCard(workout: Workout): string {
        const duration = Math.round(workout.duration / 60);
        return ` <div class='workouts__card uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light' data-src='${workout.coverImageUrl}' uk-img='loading: eager'>
                    <div class='workouts__wrapper-title'>
                         <div class='workouts__title'>${workout.title}</div>
                         <div class='workouts__subtitle'>${workout.subtitle}</div>
                         <div class='workouts__info'>${duration} min - ${workout.difficulty} - ${workout.trainer.name}</div>
                    </div>
                    <div class='workouts__dimm'></div>
            </div>`;
    }

    public createWorkoutList(workouts: Workout[]): HTMLElement {
        const workoutList = <HTMLElement>document.createElement('div');
        workoutList.className = 'workouts__wrapper-list uk-grid-small uk-child-width-expand@s uk-text-center';
        workoutList.setAttribute('uk-grid', '');

        workoutList.innerHTML = workouts.map(workout => this.createWorkoutListCard(workout))
            .join('');
        return workoutList;
    }
}
