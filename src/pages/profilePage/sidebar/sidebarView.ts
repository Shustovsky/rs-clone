import './sidebar.scss';
import { t } from 'i18next';
import { Profile } from '../../../model/Profile';

export class SidebarView {
    private readonly selector: string;

    constructor(selector: string) {
        this.selector = selector;
    }
    public async render(profile: Profile): Promise<void> {
        const root = <HTMLBodyElement>document.querySelector(this.selector);
        const sidebar = <HTMLDivElement>document.createElement('div');
        sidebar.className = 'sidebar_wrapper';
        sidebar.innerHTML = await this.createSidebar(profile);
        root.append(sidebar);
    }

    private async createSidebar(profile: Profile): Promise<string> {
        const userLocation = await this.getUserLocation().then((country) => {
            return country;
        });

        const nickName =
            profile.firstName && profile.lastName ? `${profile.firstName} ${profile.lastName}` : profile.email;
        return `<div class="profile_sidebar_basic uk-flex uk-flex-center uk-flex-column">
        <div class="account-img"></div>
        <h2 class="profile_sidebar_name">${nickName}</h2>
        <div class="profile-sidebar_info uk-flex uk-flex-middle">
          <span class="padding-right"><strong class="trac_score_total">0</strong> ${t(
              'profile.score'
          )}</span><hr class="uk-divider-vertical"><span>${profile.location || userLocation}</span>
        </div>
      </div>
    `;
    }

    private getUserLocation(): Promise<string> {
        return fetch('https://api.ipify.org?format=json')
            .then((response) => response.json())
            .then((data) => {
                const ip = data.ip;
                return fetch(`https://ipapi.co/${ip}/json/`)
                    .then((response) => response.json())
                    .then((data) => {
                        return data.country_name;
                    });
            });
    }
}
