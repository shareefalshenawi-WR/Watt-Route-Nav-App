import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../../common/Button/Button";
import AsyncImage from "../../common/AsyncImage/AsyncImage";
import { useScroll } from "../../../hooks/useScroll";
import { useLanguage } from "../../../hooks/useLanguage";
import { useTheme } from "../../../context/ThemeContext";
import { NAV_ITEMS, ROUTES } from "../../../constants/routes";
import styles from "./Navbar.module.css";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const Navbar = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const scrolled = useScroll(50);

  const isHomePage = location.pathname === ROUTES.HOME;

  const navbarState = isHomePage
    ? scrolled
      ? "scrolled"
      : "transparent"
    : "scrolled";

  // Map nav items to translation keys
  const translatedNavItems = NAV_ITEMS.map((item) => ({
    ...item,
    translatedName: t(`navbar.${item.translationKey}`),
  }));

  return (
    <motion.nav
      className={`${styles.navbar} ${
        navbarState === "scrolled" ? styles.scrolled : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={scrollToTop}>
          <AsyncImage
            src="/images/logo.webp"
            alt="Watt Route Logo"
            className={`${styles.logoImage} ${
              navbarState === "scrolled" ? styles.logoScrolled : ""
            }`}
          />
          <span
            className={`${styles.logoText} ${
              navbarState === "scrolled" ? styles.textScrolled : ""
            }`}
          >
            Watt Route
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.navMenu}>
          {translatedNavItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`${styles.navLink} ${
                  navbarState === "scrolled" ? styles.linkScrolled : ""
                } ${location.pathname === item.path ? styles.active : ""}`}
                onClick={item.path === ROUTES.HOME ? scrollToTop : undefined}
              >
                {item.translatedName}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to={ROUTES.DOWNLOAD_APP} className={styles.ctaButtonLink}>
          <Button variant="secondary" className={styles.ctaButton}>
            {t("navbar.downloadApp")}
          </Button>
        </Link>

        {/* Language Switcher */}
        <div className={styles.languageSwitcher}>
          <button
            onClick={() => changeLanguage("en")}
            className={`${styles.langButton} ${
              currentLanguage === "en" ? styles.active : ""
            }`}
            aria-label="Switch to English"
            title="English"
          >
            EN
          </button>
          <span className={styles.langSeparator}>|</span>
          <button
            onClick={() => changeLanguage("ar")}
            className={`${styles.langButton} ${
              currentLanguage === "ar" ? styles.active : ""
            }`}
            aria-label="Switch to Arabic"
            title="العربية"
          >
            AR
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <button
          className={`${styles.themeToggle} ${
            navbarState === "scrolled" ? styles.themeToggleScrolled : ""
          }`}
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.burger} ${menuOpen ? styles.open : ""} ${
              navbarState === "scrolled" ? styles.burgerScrolled : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {translatedNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={styles.mobileNavLink}
              onClick={() => {
                setMenuOpen(false);
                if (item.path === ROUTES.HOME) scrollToTop();
              }}
            >
              {item.translatedName}
            </Link>
          ))}
          <Link
            to={ROUTES.DOWNLOAD_APP}
            className={styles.mobileCtaButtonLink}
            onClick={() => setMenuOpen(false)}
          >
            <Button variant="secondary" className={styles.mobileCtaButton}>
              {t("navbar.downloadApp")}
            </Button>
          </Link>

          {/* Mobile Language Switcher */}
          <div className={styles.mobileLangSwitcher}>
            <button
              onClick={() => {
                changeLanguage("en");
                setMenuOpen(false);
              }}
              className={`${styles.mobileLangButton} ${
                currentLanguage === "en" ? styles.active : ""
              }`}
            >
              English (EN)
            </button>
            <button
              onClick={() => {
                changeLanguage("ar");
                setMenuOpen(false);
              }}
              className={`${styles.mobileLangButton} ${
                currentLanguage === "ar" ? styles.active : ""
              }`}
            >
              العربية (AR)
            </button>
          </div>

          {/* Mobile Dark Mode Toggle */}
          <button
            className={styles.mobileDarkToggle}
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
            <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
