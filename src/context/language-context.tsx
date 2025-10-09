"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';
import id from '@/locales/id.json';

export type LanguageCode = 'ru' | 'en' | 'id';

export interface Language {
    code: LanguageCode;
    name: string;
}

export const languages: { [key in LanguageCode]?: Language } = {
    ru: { code: 'ru', name: 'Русский' },
    en: { code: 'en', name: 'English' },
    id: { code: 'id', name: 'Bahasa Indonesia' },
};

const translations = { ru, en, id };

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (language: LanguageCode) => void;
    translations: any; 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<LanguageCode>('en');
    const [currentTranslations, setCurrentTranslations] = useState(translations.en);

    useEffect(() => {
        // @ts-ignore
        setCurrentTranslations(translations[language] || translations.en);
        document.documentElement.lang = language;
    }, [language]);
    
    return (
        <LanguageContext.Provider value={{ language, setLanguage, translations: currentTranslations }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
