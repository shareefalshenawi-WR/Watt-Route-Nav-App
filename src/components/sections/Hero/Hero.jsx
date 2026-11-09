import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useLanguage } from "../../../hooks/useLanguage";
import { useTheme } from "../../../context/ThemeContext";
import { ROUTES } from "../../../constants/routes";
import styles from "./Hero.module.css";

const SunIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Hero = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const switchToEn = useCallback(() => changeLanguage("en"), [changeLanguage]);
  const switchToAr = useCallback(() => changeLanguage("ar"), [changeLanguage]);

  // Animation refs
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const badgeRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRowRef = useRef(null);
  const trustFooterRef = useRef(null);
  const vehicleStageRef = useRef(null);

  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const leftElements = [
        badgeRef.current,
        title1Ref.current,
        title2Ref.current,
        subheadlineRef.current,
        ctaRowRef.current,
        trustFooterRef.current,
      ].filter(Boolean);

      tl.from(headerRef.current, { opacity: 0, y: -20, duration: 0.7 });

      tl.from(
        leftElements,
        { opacity: 0, y: 28, duration: 0.65, stagger: 0.08 },
        "-=0.4"
      );

      // EV vehicle glides in from right
      if (vehicleStageRef.current) {
        tl.from(
          vehicleStageRef.current,
          {
            opacity: 0,
            x: 50,
            scale: 0.95,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.heroSection}
      aria-label="Hero Section"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />

      <header ref={headerRef} className={styles.heroHeader}>
        {/* Brand Logo */}
        <Link to="/" className={styles.brandLogo} aria-label="Watt Route Home">
          <img
            src="/images/logo.webp"
            alt="Watt Route Logo"
            className={styles.logoImg}
            width="35"
            height="35"
          />
          <span className={styles.brandTitle}>
            Watt Route<span className={styles.brandDot}>.</span>
          </span>
        </Link>

        {/* Center Navigation */}
        <nav className={styles.centerNav} aria-label="Main Navigation">
          <Link to={ROUTES.EV_SOLUTIONS} className={styles.navLink}>
            {t("navbar.evSolutions")}
          </Link>
          <Link to={ROUTES.PRODUCTS} className={styles.navLink}>
            {t("navbar.products")}
          </Link>
          <Link to={ROUTES.ABOUT} className={styles.navLink}>
            {t("navbar.about")}
          </Link>
          <Link to={ROUTES.SUPPORT} className={styles.navLink}>
            {t("navbar.support")}
          </Link>
        </nav>

        {/* Right Header Actions */}
        <div className={styles.headerActions}>
          {/* Language Switcher */}
          <div className={styles.langSwitcher}>
            <button
              type="button"
              onClick={switchToEn}
              className={`${styles.langBtn} ${
                currentLanguage === "en" ? styles.activeLang : ""
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              onClick={switchToAr}
              className={`${styles.langBtn} ${
                currentLanguage === "ar" ? styles.activeLang : ""
              }`}
              aria-label="Switch to Arabic"
            >
              AR
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            className={styles.themeBtn}
            onClick={toggleTheme}
            aria-label={isDark ? t("navbar.lightMode") : t("navbar.darkMode")}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Download App CTA */}
          <Link to={ROUTES.DOWNLOAD_APP} className={styles.headerDownloadBtn}>
            <DownloadIcon />
            <span>{t("navbar.downloadApp")}</span>
          </Link>
        </div>
      </header>

      {/*  Hero Body: Two-Column Composition*/}
      <div className={styles.heroBody}>
        {/* Left Column: Editorial Content */}
        <div className={styles.heroLeft}>
          {/* Eyebrow Status Badge */}
          <div ref={badgeRef} className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span>{t("products.badge")}</span>
          </div>

          {/* Large Bold Headline */}
          <h1 className={styles.headline}>
            <span ref={title1Ref} className={styles.headlineLine1}>
              {t("hero.redesignHeadline1")}
            </span>
            <span ref={title2Ref} className={styles.headlineLine2}>
              {t("hero.redesignHeadline2")}
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p ref={subheadlineRef} className={styles.subheadline}>
            {t("hero.redesignSubtext")}
          </p>

          {/* Action Buttons Row */}
          <div ref={ctaRowRef} className={styles.ctaRow}>
            {/* Primary: Explore DOMEv */}
            <Link to={ROUTES.PRODUCTS} className={styles.primaryCta}>
              <span>{t("hero.exploreDomev")}</span>
              <svg
                className={styles.arrowIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Secondary: Download App */}
            <Link to={ROUTES.DOWNLOAD_APP} className={styles.secondaryCta}>
              <DownloadIcon />
              <span>{t("navbar.downloadApp")}</span>
            </Link>
          </div>

          {/* Global Goals Trust Marks */}
          <div ref={trustFooterRef} className={styles.trustFooter}>
            <span className={styles.trustLabel}>
              {t("hero.globalGoalsHeading")}
            </span>
            <div className={styles.trustLogos}>
              <div className={styles.trustItem}>
                <img
                  src="/images/Global Goals/Egypt Vision 2030.png"
                  alt="Egypt Vision 2030"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
                <span>Egypt Vision 2030</span>
              </div>
              <div className={styles.trustItem}>
                <img
                  src="/images/Global Goals/Goal-07.png"
                  alt="UN SDG 7"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
                <span>UN SDG 7</span>
              </div>
              <div className={styles.trustItem}>
                <img
                  src="/images/Global Goals/SDG 13.png"
                  alt="UN SDG 13"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
                <span>UN SDG 13</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: EV Vehicle Visual */}
        <div className={styles.heroRight}>
          <div className={styles.vehicleBackdropGlow} aria-hidden="true" />
          <div ref={vehicleStageRef} className={styles.vehicleStage}>
            <div className={styles.vehicleGroundShadow} aria-hidden="true" />
            <img
              src="/images/hero-ev-vehicle.webp"
              alt="Watt Route Luxury Electric Sports Sedan"
              className={styles.evImage}
              width="820"
              height="460"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
