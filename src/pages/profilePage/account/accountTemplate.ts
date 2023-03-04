import { t } from 'i18next';
import { Profile } from '../../../model/Profile';

export const accountTemplate = (profile: Profile): string => {
    const ft = profile.height ? profile.height.split('|')[0] : '0';
    const inch = profile.height ? profile.height.split('|')[1] : '0';
    return `
        <div class="form_row uk-flex form_row_margin">
            <div class="form_row_half uk-flex">
                <input class="uk-input input_number js-profile-ft" 
                    type="number" 
                    value=${ft} 
                    min="4" 
                    max="7"
                >
                <span class="input_separator">'</span>
                <input class="uk-input input_number js-profile-inch" 
                    type="number" 
                    value=${inch} 
                    min="0" 
                    max="11"
                >
                <span class="input_separator">"</span>
                <div class="account_unit">${t('profile.ft')}</div>
            </div>
            <div class="form_row_half">
                <input class="uk-input input_number_half js-profile-weight" 
                    type="number" 
                    value=${profile.weight} 
                    min="66" 
                    max="439"
                >
                <div class="account_unit">${t('profile.lbs')}</div>
            </div>
        </div>
        <h3 class="account_title">${t('profile.privacy')}</h3>
        <div class="uk-margin uk-child-width-auto uk-flex radio_button_gap">
            <div class="form_row_half input_border">
                <label>
                    <input 
                        class="uk-radio js-profile-isPrivateOnlyMe" 
                        type="radio" 
                        name="radio1" 
                        ${profile.isPrivateOnlyMe ? 'checked' : ''}
                    > 
                    <strong class="label_padding">
                        ${t('profile.privacyOnlyPart1')}
                    </strong> ${t('profile.privacyOnlyPart2')}
                </label>
            </div>
            <div class="form_row_half input_border">
                <label>
                    <input class="uk-radio" type="radio" name="radio1" ${!profile.isPrivateOnlyMe ? 'checked' : ''}> 
                    <strong class="label_padding">${t('profile.publicPart1')}</strong> ${t('profile.publicPart2')}
                </label>
            </div>
        </div>
        <h3 class="account_title margin_account_title">${t('profile.offers')}</h3>
        <p class="account_paragraph">${t('profile.offersText')}</p>
        <div class="uk-margin uk-child-width-auto uk-flex radio_button_gap">
            <div class="form_row_half input_border">
                <label>
                    <input 
                        class="uk-radio js-profile-isOffersNotificationEnabled" 
                        type="radio" 
                        name="radio3" 
                        ${profile.isOffersNotificationEnabled ? 'checked' : ''}
                    > 
                    <strong class="label_padding">${t('profile.on')}</strong>
                </label>
            </div>
            <div class="form_row_half input_border">
                <label>
                    <input class="uk-radio" 
                        type="radio" 
                        name="radio3" 
                        ${!profile.isOffersNotificationEnabled ? 'checked' : ''}
                    > 
                    <strong class="label_padding">${t('profile.off')}</strong>
                </label>
            </div>
        </div>
        <h3 class="account_title margin_account_title">${t('profile.emailRetargeting')}</h3>
        <p class="account_paragraph">${t('profile.emailRetargetingText')}</p>
        <div class="uk-margin uk-child-width-auto uk-flex radio_button_gap form_row_margin_below">
            <div class="form_row_half input_border">
              <label>
                  <input 
                      class="uk-radio js-profile-isEmailNotificationEnabled" 
                      type="radio" 
                      name="radio4" 
                      ${profile.isEmailNotificationEnabled ? 'checked' : ''}
                  > 
                  <strong class="label_padding">${t('profile.on')}</strong>
              </label>
            </div>
            <div class="form_row_half input_border">
                <label>
                    <input 
                        class="uk-radio" 
                        type="radio" 
                        name="radio4" 
                        ${!profile.isEmailNotificationEnabled ? 'checked' : ''}
                    > 
                    <strong class="label_padding">${t('profile.off')}</strong>
                </label>
            </div>
        </div>
        <div class="account_wrapper_button">
            <button class="button_save uk-button uk-button-secondary">${t('profile.savePreferences')}</button>
        </div>
    </form>`;
};
