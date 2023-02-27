import { t } from 'i18next';
import { ProfilePageView } from './profileViewPage';
import { ProfileService } from '../../service/profileService';
import { AuthService } from '../../service/authService';
import { Router } from '../../components/router/Router';

export class ProfileController {
    private readonly profilePageView: ProfilePageView;
    private readonly profileService: ProfileService;
    private readonly authService: AuthService;
    private readonly router: Router;

    constructor(
        profilePageView: ProfilePageView,
        profileService: ProfileService,
        authService: AuthService,
        router: Router
    ) {
        this.profilePageView = profilePageView;
        this.profileService = profileService;
        this.authService = authService;
        this.router = router;
    }

    public async render(): Promise<void> {
        if (this.authService.isLoggedIn()) {
            const profile = await this.profileService.fetchProfile(this.authService.getUserId());
            await this.profilePageView.render(profile);
        } else {
            this.router.redirectToLogin();
        }

        this.profilePageView.bindLogOutFromButton(() => this.logout());
        this.profilePageView.bindDeleteAccountButton((password) => this.deleteAccount(password));
        this.profilePageView.bindConfirmDeleteAccountInput();
    }

    private async logout(): Promise<void> {
        await this.authService.logOut();
        this.router.redirectToMain();
    }

    private async deleteAccount(password: string): Promise<void> {
        if (this.authService.isLoggedIn()) {
            this.authService
                .reauthenticate(password)
                .then(() => this.profileService.deleteProfile(this.authService.getUserId()))
                .then(() => this.authService.deleteUser())
                .then(() => this.router.redirectToMain())
                .catch((reason) => {
                    console.log(reason);
                    this.profilePageView.createConfirmDeleteErrorMessage(
                        t('profile.confirmDeleteWrongPasswordErrorMessage')
                    );
                });
        }
    }
}
