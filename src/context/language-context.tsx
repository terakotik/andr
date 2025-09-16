"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';

export type LanguageCode = 'ru' | 'en' | 'cn';

export interface Language {
    code: LanguageCode;
    name: string;
}

export const languages: { [key in LanguageCode]: Language } = {
    ru: { code: 'ru', name: 'Русский' },
    en: { code: 'en', name: 'English' },
    cn: { code: 'cn', name: '中文' },
};

const translations = { ru, en };

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (language: LanguageCode) => void;
    translations: any; 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<LanguageCode>('ru');
    const [currentTranslations, setCurrentTranslations] = useState(translations.ru);

    useEffect(() => {
        // @ts-ignore
        setCurrentTranslations(translations[language] || translations.ru);
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
