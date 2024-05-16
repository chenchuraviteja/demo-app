import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../assets/locales/en.json';
import te from '../assets/locales/te.json';
import ta from '../assets/locales/ta.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      te: { translation: te },
      ta: { translation: ta }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
