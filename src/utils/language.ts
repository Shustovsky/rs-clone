import { changeLanguage } from 'i18next';

export const getLanguageFromLocation = (): string => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('lang') || 'en';
}

export const updateLanguage = () => {
    const currentLanguage = getLanguageFromLocation();
    changeLanguage(currentLanguage);
}
