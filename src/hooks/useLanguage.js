import { useTranslation } from "react-i18next";
import { useEffect } from "react";

/**
 * Custom hook for managing language selection with localStorage persistence
 * Also handles RTL support for Arabic
 */
export const useLanguage = () => {
  const { i18n } = useTranslation();

  // Apply RTL or LTR to document based on language
  useEffect(() => {
    const currentLanguage = i18n.language;
    const isArabic = currentLanguage === "ar";

    // Update document direction
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
    document.body.setAttribute("data-language", currentLanguage);

    // Save language preference to localStorage
    localStorage.setItem("selectedLanguage", currentLanguage);
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language;
  const isArabic = currentLanguage === "ar";

  return {
    currentLanguage,
    isArabic,
    changeLanguage,
    i18n,
  };
};
