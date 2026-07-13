import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./en.json";
import translationCs from "./cs.json";
import translationDe from "./de.json";

const resources = {
  en: {
    translation: translationEn,
  },
  cs: {
    translation: translationCs,
  },
  de: {
    translation: translationDe,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
