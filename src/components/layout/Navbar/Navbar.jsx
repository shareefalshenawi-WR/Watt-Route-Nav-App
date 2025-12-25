import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../../common/Button/Button";
import { useScroll } from "../../../hooks/useScroll";
import { useLanguage } from "../../../hooks/useLanguage";
import { NAV_ITEMS, ROUTES } from "../../../constants/routes";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
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
        <Link to="/" className={styles.logo}>
          <img
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
              onClick={() => setMenuOpen(false)}
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
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
