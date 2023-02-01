import headerTemplate from './header.template.html';

export class HeaderView {
    public createHeader() {
        document.body.insertAdjacentHTML('afterbegin', headerTemplate);
    }
}
