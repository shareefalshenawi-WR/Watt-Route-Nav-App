/**
 * Application Routes Constants
 * Centralized route definitions for consistent navigation
 */
export const ROUTES = {
  HOME: "/",
  EV_SOLUTIONS: "/ev-solutions",
  PRODUCTS: "/products",
  SUPPORT: "/support",
  ABOUT: "/about",
  HELP_USER_GUIDE: "/help/user-guide",
  HELP_VIDEO_TUTORIALS: "/help/video-tutorials",
  HELP_COMMUNITY_FORUM: "/help/community-forum",
  DOWNLOAD_APP: "/download-app",
  FIND_CHARGING_STATIONS: "/find-charging-stations",
};

/**
 * Navigation Items for Navbar
 */
export const NAV_ITEMS = [
  { name: "About", path: ROUTES.ABOUT, translationKey: "about" },
  {
    name: "EV Solutions",
    path: "/ev-solutions",
    translationKey: "evSolutions",
  },
  { name: "Products", path: "/products", translationKey: "products" },
  { name: "Support", path: "/support", translationKey: "support" },
];
