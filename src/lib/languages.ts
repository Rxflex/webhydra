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

type TranslationType = {
    home: object,
    faq: object,
    global: object,
    download: object
}

export const useTranslations = (locale: string) : TranslationType => {
    return translations[locale] || translations['en']; // Default to 'en' if locale not found
};
