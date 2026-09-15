import { useState, useEffect } from "react";

/**
 * Custom hook to track window size
 * @returns {Object} - Object containing width and height
 */
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      // Debounce 150ms to avoid firing on every resize pixel
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        // Only update state when values actually changed
        setWindowSize((prev) =>
          prev.width !== w || prev.height !== h ? { width: w, height: h } : prev
        );
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    // Set initial size immediately (no debounce needed on mount)
    const w = window.innerWidth;
    const h = window.innerHeight;
    setWindowSize((prev) =>
      prev.width !== w || prev.height !== h ? { width: w, height: h } : prev
    );

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

