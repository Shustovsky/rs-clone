import { t } from 'i18next';

export const accountTemplate = (): string => {
    return `
        <div class="form_row uk-flex form_row_margin">
            <div class="form_row_half uk-flex">
                <input class="uk-input input_number" type="number" value="0" min="4" max="7">
                <span class="input_separator">'</span>
                <input class="uk-input input_number" type="number" value="0" min="0" max="11">
                <span class="input_separator">"</span>
                <div class="account_unit">${t('profile.ft')}</div>
            </div>
            <div class="form_row_half">
                <input class="uk-input input_number_half" type="number" value="0" min="66" max="439">
                <div class="account_unit">${t('profile.lbs')}</div>
            </div>
        </div>
        <h3 class="account_password_title account_title">${t('profile.changePassword')}</h3>
        <div class="form_row uk-flex form_row_margin">
            <div class="form_row_half">
                <input class="uk-input" type="password" placeholder="${t('profile.passwordCurrent')}">
            </div>
            <div class="form_row_half">
            </div>
        </div>
            <div class="form_row uk-flex">
                <div class="form_row_half">
                <input class="uk-input" type="password" placeholder="${t('profile.passwordNew')}">
            </div>
            <div class="form_row_half">
                <input class="uk-input" type="password" placeholder="${t('profile.passwordConfirm')}">
            </div>
        </div>
        <h3 class="account_title">${t('profile.privacy')}</h3>
        <div class="uk-margin uk-child-width-auto uk-flex radio_button_gap">
            <div class="form_row_half input_border">
                <label><input class="uk-radio" type="radio" name="radio1" checked> <strong class="label_padding">${t(
                    'profile.privacyOnlyPart1'
                )}</strong> ${t('profile.privacyOnlyPart2')}</label>
            </div>
            <div class="form_row_half input_border">
                <label><input class="uk-radio" type="radio" name="radio1"> <strong class="label_padding">${t(
                    'profile.publicPart1'
                )}</strong> ${t('profile.publicPart2')}</label>
            </div>
        </div>
        <h3 class="account_title">${t('profile.units')}</h3>
        <div class="uk-margin uk-child-width-auto uk-flex radio_button_gap">
            <div class="form_row_half input_border">
                <label><input class="uk-radio" type="radio" name="radio2"> <strong class="label_padding">${t(
                    'profile.metric'
                )}</strong></label>
            </div>
            <div class="form_row_half input_border">
                <label><input class="uk-radio" type="radio" name="radio2" checked> <strong class="label_padding">${t(
                    'profile.imperial'
                )}</strong></label>
            </div>
        </div>
        <h3 class="account_title margin_account_title">${t('profile.offers')}</h3>
        <p class="account_paragraph">${t('profile.offersText')}</p>
        <div class="uk-margin uk-child-width-auto uk-flex radio_button_gap">
            <div class="form_row_half input_border">
                <label><input class="uk-radio" type="radio" name="radio3" checked> <strong class="label_padding">${t(
                    'profile.on'
                )}</strong></label>
            </div>
            <div class="form_row_half input_border">
                <label><input class="uk-radio" type="radio" name="radio3"> <strong class="label_padding">${t(
                    'profile.off'
                )}</strong></label>
            </div>
        </div>
        <h3 class="account_title margin_account_title">${t('profile.emailRetargeting')}</h3>
        <p class="account_paragraph">${t('profile.emailRetargetingText')}</p>
        <div class="uk-margin uk-child-width-auto uk-flex radio_button_gap form_row_margin_below">
            <div class="form_row_half input_border">
              <label><input class="uk-radio" type="radio" name="radio4" checked> <strong class="label_padding">${t(
                  'profile.on'
              )}</strong></label>
            </div>
            <div class="form_row_half input_border">
                <label><input class="uk-radio" type="radio" name="radio4"> <strong class="label_padding">${t(
                    'profile.off'
                )}</strong></label>
            </div>
        </div>
        <div class="account_wrapper_button">
            <button class="button_save uk-button uk-button-secondary">${t('profile.savePreferences')}</button>
        </div>
    </form>`;
};
