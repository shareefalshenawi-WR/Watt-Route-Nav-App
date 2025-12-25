import { useState, useEffect } from "react";

/**
 * Custom hook to detect scroll position
 * @param {number} threshold - Scroll threshold in pixels (default: 50)
 * @returns {boolean} - Whether the scroll threshold has been exceeded
 */
export const useScroll = (threshold = 50) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
};

