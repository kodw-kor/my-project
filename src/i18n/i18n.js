import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ko from "./locales/ko.json";

// Define translations
const resources = {
  en: { translation: en },
  ko: { translation: ko },
};

i18n
  .use(initReactI18next) // Bind with React
  .init({
    resources,
    lng: "en",
    fallbackLng: "ko",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
