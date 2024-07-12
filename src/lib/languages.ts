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
    "home": {
        "meet": string
    },
    "faq": {
        "title": string,
        "description": string,
        "discord": string,
        "items": {
                "title": string,
                "description": string
        }[]
    },
    "download": {
        "uptitle": string,
        "title": string,
        "description": string
    },
    "global": {
        "download": string,
        "support_menu": string,
        "faq_menu": string,
        "links_menu": string
    }
}

export const useTranslations = (locale: string) : TranslationType => {
    return translations[locale] || translations['en']; // Default to 'en' if locale not found
};
