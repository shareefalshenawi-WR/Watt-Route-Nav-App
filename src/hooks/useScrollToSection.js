import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to a section by ID
 * @returns {Function} - Function to scroll to a section
 */
export const useScrollToSection = () => {
  const scrollToSection = useCallback((sectionId, options = {}) => {
    const {
      behavior = "smooth",
      block = "start",
      fallback = null,
    } = options;

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior, block });
    } else if (fallback) {
      // Fallback behavior if element not found
      if (fallback === "bottom") {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior,
        });
      } else if (typeof fallback === "function") {
        fallback();
      }
    }
  }, []);

  return scrollToSection;
};

