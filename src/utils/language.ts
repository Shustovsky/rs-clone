import { changeLanguage } from 'i18next';

enum SearchParams {
    lang = 'lang',
    DEFAULT_LANG = 'en'
}

export const getLanguageFromLocation = (): string => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(SearchParams.lang) || SearchParams.DEFAULT_LANG;
}

export const updateLanguage = async (): Promise<void> => {
    const currentLanguage = await getLanguageFromLocation();
    changeLanguage(currentLanguage);
}
