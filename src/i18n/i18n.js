import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import arTranslations from "./locales/ar.json";

const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem("selectedLanguage") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  defaultNS: "translation",
  ns: ["translation"],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
