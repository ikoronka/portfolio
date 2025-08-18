import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from './en.json';
import translationCs from './cs.json';

// Define resources
const resources = {
  en: {
    translation: translationEn
  },
  cs: {
    translation: translationCs
  }
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

export default i18n;