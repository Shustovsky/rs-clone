import { SwitcherView } from './switcher/switcherView';

export class ProfilePageView {
    private readonly switcher: SwitcherView;

    constructor() {
        this.switcher = new SwitcherView('#root main');
    }

    public render(): void {
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__profile_content';
        root.append(main);
        this.switcher.render();
    }
}
