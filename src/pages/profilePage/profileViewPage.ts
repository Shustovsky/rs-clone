import { t } from 'i18next';
import { ActivitiesView } from './activities/activitiesView';
import { AccountView } from './account/account';
import { AccountDeleteView } from './accountDelete/accountDeletView';
import { LogoutView } from './logout/logoutView';
import { SidebarView } from './sidebar/sidebarView';
import { Footer } from '../../components/footer/footer';
import './switcher/switcher.scss';
import { Profile } from '../../model/Profile';

export class ProfilePageView {
    private readonly activities: ActivitiesView;
    private readonly account: AccountView;
    private readonly accountDelete: AccountDeleteView;
    private readonly logout: LogoutView;
    private readonly sidebar: SidebarView;
    private readonly footer: Footer;

    constructor() {
        this.activities = new ActivitiesView('#root main');
        this.account = new AccountView('#root main');
        this.accountDelete = new AccountDeleteView('#root main');
        this.logout = new LogoutView('#root main');
        this.sidebar = new SidebarView('#root main');
        this.footer = new Footer('#root');
    }

    public render(profile: Profile): void {
        const root = <HTMLBodyElement>document.querySelector('#root');
        const main = document.createElement('main');
        main.className = 'main__profile_content';
        root.append(main);

        const switcher = <HTMLDivElement>document.createElement('div');
        switcher.className = 'switcher_wrapper';
        this.sidebar.render(profile);
        this.activities.render(profile.workouts);
        this.account.render(profile);
        this.accountDelete.render(profile);
        this.logout.render();
        this.footer.render();
        const accountWrapper = <HTMLDivElement>document.querySelector('.account_wrapper');
        const activitiesWrapper = <HTMLDivElement>document.querySelector('.activities_wrapper');
        const accountDeleteWrapper = <HTMLDivElement>document.querySelector('.accountDelete_wrapper');

        switcher.innerHTML = `<div class='uk-child-width-1-1@s uk-grid'>
        <div>
            <div uk-grid>
                <div class='uk-width-auto@m profile_tabs'>
                    <ul class='uk-tab-right margin_reset' uk-tab='connect: #component-tab-left; animation: uk-animation-fade'>
                        <li><a href='#' class='tabs_padding'>${t('profile.activities')}</a></li>
                        <li><a href='#' class='tabs_padding'>${t('profile.account')}</a></li>
                        <li><a href='#' class='tabs_padding'>${t('profile.deleteAccount')}</a></li>
                    </ul>
                </div>
                <div class='uk-width-expand@m main_content_switcher'>
                    <ul id='component-tab-left' class='uk-switcher margin_reset'>
                        <li class='li_activities'></li>
                        <li class='li_account'></li>
                        <li class='li_account_delete'></li>
                    </ul>
                </div>
            </div>
        </div>
        <div>`;
        root.append(switcher);

        const liActivities = <HTMLLIElement>document.querySelector('.li_activities');
        const historyWorkout = <HTMLDivElement>document.querySelector('.activities_month');
        liActivities.append(activitiesWrapper, historyWorkout);

        const liAccount = <HTMLLIElement>document.querySelector('.li_account');
        liAccount.append(accountWrapper);

        const liAccountDelete = <HTMLLIElement>document.querySelector('.li_account_delete');
        liAccountDelete.append(accountDeleteWrapper);

        const tabsWrapper = <HTMLDivElement>document.querySelector('.profile_tabs');
        const sidebarWrapper = <HTMLDivElement>document.querySelector('.profile_sidebar_basic');
        tabsWrapper.insertBefore(sidebarWrapper, tabsWrapper.firstChild);

        const logoutBtn = <HTMLDivElement>document.querySelector('.btn_logout_container');
        tabsWrapper.append(logoutBtn);

        const footer = <HTMLElement>document.querySelector('.footer');
        const mainContent = <HTMLDivElement>document.querySelector('.main_content_switcher');
        mainContent.append(footer);
    }

    public bindLogOutFromButton(callback: () => Promise<void>) {
        const btn = <HTMLButtonElement>document.querySelector('.btn_logout');
        btn.addEventListener('click', () => callback());
    }

    public bindDeleteAccountButton(callback: () => void) {
        const btn = <HTMLButtonElement>document.querySelector('.button_delete');
        btn.addEventListener('click', () => {
            const confirmDelete = <HTMLInputElement>document.querySelector('.js_confirm_delete_input');
            if (confirmDelete.value === 'delete') {
                callback();
            } else if (!btn.parentElement?.parentElement?.querySelector('.account__delete-error')) {
                this.createConfirmDeleteErrorMessage();
            }
        });
    }

    public bindConfirmDeleteAccountInput() {
        const inputDelete = <HTMLInputElement>document.querySelector('.js_confirm_delete_input');
        inputDelete.addEventListener('blur', () => {
            if (inputDelete.value !== 'delete' && !inputDelete.parentElement?.querySelector('.account__delete-error')) {
                this.createConfirmDeleteErrorMessage();
            } else {
                this.deleteConfirmDeleteErrorMessage();
            }
        });
    }

    private deleteConfirmDeleteErrorMessage(): void {
        const inputDelete = <HTMLInputElement>document.querySelector('.js_confirm_delete_input');
        inputDelete.classList.remove('uk-form-danger');
        document.querySelector('.account__delete-error')?.remove();
    }

    private createConfirmDeleteErrorMessage(): void {
        const inputDelete = <HTMLInputElement>document.querySelector('.js_confirm_delete_input');
        inputDelete.classList.add('uk-form-danger');

        const errorMassage = document.createElement('div');
        errorMassage.className = 'account__delete-error';
        errorMassage.textContent = t('profile.confirmDeleteErrorMessage');
        inputDelete?.after(errorMassage);
    }
}
