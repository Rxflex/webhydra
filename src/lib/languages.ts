import * as en from '@/locales/en.json';
import * as ru from '@/locales/ru.json';
import * as pt from '@/locales/pt.json';
import * as es from '@/locales/es.json';

export type Locale = 'en' | 'ru' | 'pt' | 'es';

const translations: Record<Locale, TranslationType> = {
    en,
    ru,
    pt,
    es
};

export type TranslationType = {
    home: {
        meet: string
    },
    faq: {
        title: string,
        description: string,
        discord: string,
        items: {
            title: string,
            description: string
        }[]
    },
    download: {
        uptitle: string,
        title: string,
        description: string
    },
    global: {
        download: string,
        support_menu: string,
        faq_menu: string,
        links_menu: string
    }
};

export const useTranslations = (locale: Locale): TranslationType => {
    return translations[locale] || translations['en']; // Default to 'en' if locale not found
};

export const isLocale = (lang: string): lang is Locale => {
    return ['en', 'ru', 'pt', 'es'].includes(lang);
};