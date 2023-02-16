import { changeLanguage } from 'i18next';

const DEFAULT_LANG = 'en'

export enum SearchParams {
    lang = 'lang',
}

export const getLanguageFromLocation = (): string => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(SearchParams.lang) || DEFAULT_LANG;
}

export const updateLanguage = async (): Promise<void> => {
    const currentLanguage = await getLanguageFromLocation();
    changeLanguage(currentLanguage);
}
