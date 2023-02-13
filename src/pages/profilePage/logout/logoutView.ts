import '../logout/logout.scss';
import LogoutTemplate from '../logout/logout.html';

export class LogoutView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public render() {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const logout = <HTMLDivElement>document.createElement('div');
        logout.className = 'logout_wrapper';
        logout.innerHTML = LogoutTemplate;
        root.append(logout);
    }
}
