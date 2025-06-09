import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import data from "../data/translateData"

i18n.use(initReactI18next).init({
  fallbackLng: 'vn',
  lng: 'vn', // default language
  debug: false,
  resources: {
    en: {
      translation: data.en
    },
    vn: {
      translation: data.vn
    }
  },
  keySeparator: false,
  interpolation: { escapeValue: false }
});

export default i18n;
