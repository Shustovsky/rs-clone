import './workoutsTitle.scss';

export class WorkoutsTitle {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(workoutsCount: number): void {
        const title = <HTMLElement>document.createElement('div');
        title.className = 'workouts__page-title';
        title.innerHTML = `<span>workouts</span>
                           <span class='workouts__count-title'>${workoutsCount}</span>`;
        document.querySelector(this.selector)?.append(title);
    }
}
