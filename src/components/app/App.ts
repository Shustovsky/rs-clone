import { HeaderView } from '../header/headerView';

export class App {
    header: HeaderView;

    constructor() {
        this.header = new HeaderView();
    }

    public run() {
        this.header.createHeader();
    }
}
