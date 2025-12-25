import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

/**
 * Custom hook for navigation with support for new tab/window
 * @param {boolean} openInNewTab - Whether to open link in new tab (default: false)
 * @returns {Function} - Navigation function
 */
export const useNavigation = (openInNewTab = false) => {
  const navigate = useNavigate();

  const navigateTo = useCallback(
    (path, options = {}) => {
      if (openInNewTab || options.openInNewTab) {
        // For new tab, use window.open with full URL
        // This works better on mobile devices
        try {
          const fullUrl = window.location.origin + path;
          const newWindow = window.open(fullUrl, "_blank", "noopener,noreferrer");
          
          // Fallback: if popup blocked or fails, navigate in same tab
          if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
            navigate(path);
          }
        } catch (error) {
          // Fallback to same-tab navigation if window.open fails
          navigate(path);
        }
      } else {
        // Use React Router navigation for same tab
        navigate(path, { replace: options.replace || false });
      }
    },
    [navigate, openInNewTab]
  );

  return navigateTo;
};

/**
 * Hook specifically for handling button clicks that should open in new tab
 * Returns a handler function that can be used with onClick
 * Falls back to same-tab navigation on mobile if new tab is blocked
 */
export const useNewTabNavigation = () => {
  const navigate = useNavigate();

  return useCallback(
    (path) => (e) => {
      e?.preventDefault();
      
      // Try to open in new tab
      try {
        const fullUrl = window.location.origin + path;
        const newWindow = window.open(fullUrl, "_blank", "noopener,noreferrer");
        
        // If popup blocked or fails, navigate in same tab (better for mobile)
        if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
          navigate(path);
        }
      } catch (error) {
        // Fallback to same-tab navigation
        navigate(path);
      }
    },
    [navigate]
  );
};

