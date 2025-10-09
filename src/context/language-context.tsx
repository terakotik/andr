"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';
import id from '@/locales/id.json';
import zh from '@/locales/zh.json';

export type LanguageCode = 'ru' | 'en' | 'id' | 'zh';

export interface Language {
    code: LanguageCode;
    name: string;
}

export const languages: { [key in LanguageCode]: Language } = {
    id: { code: 'id', name: 'Bahasa Indonesia' },
    ru: { code: 'ru', name: 'Русский' },
    en: { code: 'en', name: 'English' },
    zh: { code: 'zh', name: '中文' },
};

const translations = { ru, en, id, zh };

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
