import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:4000/${lang}/terms`)
      .then(res => setTranslations(res.data))
      .catch(err => console.error('Translation fetch error:', err));
  }, [lang]);

  const t = (key) => translations[key] || '';

  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
