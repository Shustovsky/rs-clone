import headerTemplate from './header.template.html';
import './header.scss';

export class HeaderView {
    public createHeader() {
        const header = <HTMLElement>document.createElement('nav');
        header.className = 'header__nav';
        header.innerHTML = headerTemplate;
        document.body.append(header);
    }
}
