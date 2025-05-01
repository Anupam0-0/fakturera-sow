import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../lib/axios'; // Adjust the import based on your project structure

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    const fetchTranslations = async () => {
      console.log('Fetching translations for language:', lang);
      try {
        const res = await api.get(`/${lang}/terms`);
        console.log('Fetched translations:', res.data);
        setTranslations(res.data);
      } catch (err) {
        console.error('Translation fetch error:', err);
      }
    };

    fetchTranslations();
  }, [lang]);

  const t = (key) => translations[key] || '';

  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
