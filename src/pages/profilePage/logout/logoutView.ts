import '../logout/logout.scss';
import { logoutTemplate } from './logoutTemplate';
import { getAuth } from 'firebase/auth';

export class LogoutView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }

    public render(): void {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const logout = <HTMLDivElement>document.createElement('div');
        logout.className = 'logout_wrapper';
        logout.innerHTML = logoutTemplate();
        root.append(logout);

        this.doLogOutFromButton();
    }

    public doLogOutFromButton(): void {
        const btn = <HTMLButtonElement>document.querySelector('.btn_logout');
        btn.addEventListener('click', () => {
            const auth = getAuth();
            auth.signOut();
        });
    }
}
