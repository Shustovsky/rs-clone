import bg from '../../../assets/img/bg-download.jpg';

export const loginWrapperTemplate = (): string => {
    return `
        <div class="login_background uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-dark"
             data-src="${bg}"
             uk-img>
            <div class="login_container uk-flex-center" uk-grid></div>
        </div>`;
};
