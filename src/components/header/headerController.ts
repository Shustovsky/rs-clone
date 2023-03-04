import { HeaderView } from './headerView';
import { getAuth } from 'firebase/auth';
import { RouterPath } from '../router/Router';

export class HeaderController {
    headerView: HeaderView;

    constructor() {
        this.headerView = new HeaderView('#root');
    }

    public render(): void {
        this.headerView.createHeader();
        const auth = getAuth();

        const url = window.location.pathname;
        if (url !== RouterPath.LOGIN) {
            if (auth.currentUser) {
                this.headerView.addLogginedBtn();
            } else {
                this.headerView.addUnlogginedBtn();
            }
        }
        if (url === RouterPath.PROFILE) {
            this.headerView.addLogginedBtnAfter();
        }
    }
}
