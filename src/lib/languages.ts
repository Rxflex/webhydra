import * as en from '@/locales/en.json';
import * as ru from '@/locales/ru.json';
import * as pt from '@/locales/pt.json';
import * as es from '@/locales/es.json';
const translations = {
    en,
    ru,
    pt,
    es
};

export const useTranslations = (locale: string) : typeof ru => {
    return translations[locale] || translations['en']; // Default to 'en' if locale not found
};
