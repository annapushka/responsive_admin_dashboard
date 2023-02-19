import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import translationEN from "../src/locales/en/translation.json";
import translationRU from "../src/locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18next.use(initReactI18next).use(LanguageDetector).use(Backend).init({
  debug: true,
  resources,
  fallbackLng: "en",
});
