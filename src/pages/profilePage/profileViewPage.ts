import { HeaderView } from '../../components/header/headerView';
import { SwitcherView } from './switcher/switcherView';

export class ProfilePageView {
    private readonly header: HeaderView;
    private readonly switcher: SwitcherView;

    constructor() {
        this.header = new HeaderView('#root');
        this.switcher = new SwitcherView('#root main');
    }

    public render(): void {
        this.header.createHeader();
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__profile_content';
        root.append(main);
        this.switcher.render();
    }
}
