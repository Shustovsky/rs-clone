import './title.scss';

export class Title {
    public static createWorkoutsTitle(workoutsCount: number): HTMLElement {
        const title = <HTMLElement>document.createElement('div');
        title.className = 'workouts__page-title';
        title.innerHTML = `<span>workouts</span>
                           <span class='workouts__count-title'>${workoutsCount}</span>`;
        return title;
    }
}
