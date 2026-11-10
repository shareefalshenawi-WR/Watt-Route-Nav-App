import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import styles from "./DomevPage.module.css";

// Stagger and reveal animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

// SVG Store Icons
const AppleIcon = () => (
  <svg viewBox="0 0 170 170" width="22" height="22" fill="currentColor">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.69-7.85-11.97-14.43-5.87-9.02-10.4-19.14-13.59-30.35-3.19-11.21-4.79-22.18-4.79-32.92 0-14.77 3.8-27.13 11.39-37.1 7.59-9.97 17.1-15.06 28.53-15.28 4.79 0 10.33 1.3 16.63 3.91 6.3 2.61 10.33 4.02 12.09 4.24 2.17-.43 6.46-1.95 12.87-4.56 6.41-2.61 11.95-3.8 16.62-3.58 12.82.65 23.36 5.54 31.62 14.67-11.08 6.74-16.51 16.08-16.3 28.04.22 9.35 3.85 17.38 10.92 24.12 7.06 6.74 15.48 10.65 25.26 11.73-2.17 6.52-4.67 13.04-7.5 19.56zM119.22 31.95c0-7.39 2.66-14.34 7.99-20.86 5.32-6.52 11.89-10.65 19.72-12.39.22 1.09.33 2.17.33 3.26 0 7.39-2.77 14.45-8.31 21.19-5.54 6.74-12.28 10.76-20.21 12.06-.43-1.09-.65-2.17-.65-3.26z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 0 1-.61-.958V2.772c.162-.363.375-.691.61-.958zm11.242 11.244l2.42 2.42-11.868 6.786 9.448-9.206zm0-2.116L5.403 1.736l11.868 6.786-2.42 2.42zm1.488 1.488l2.977 1.701c1.077.616 1.077 1.628 0 2.244l-2.977 1.701-1.745-1.745 1.745-1.901z" />
  </svg>
);

const DomevPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      {/* ====================================================================
          1. HERO SHOWCASE SECTION
          ==================================================================== */}
      <section className={styles.heroSection} aria-label="DOMEv Hero Showcase">
        {/* Background Radar Rings, Corner Arc, and Floating Glows */}
        <div className={styles.radarContainer} aria-hidden="true">
          <div className={styles.radarRing} />
          <div className={styles.radarRing} />
          <div className={styles.radarRing} />
          <div className={styles.radarRing} />
        </div>
        <div className={styles.heroCornerArc} aria-hidden="true" />
        <div className={styles.floatingDot1} aria-hidden="true" />
        <div className={styles.floatingDot2} aria-hidden="true" />

        <div className={styles.container}>
          <motion.div
            className={styles.heroGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Column: Hero Content */}
            <motion.div className={styles.heroLeft} variants={fadeUp}>

              {/* Bold Headline */}
              <h1 className={styles.heroTitle}>
                {t("domevPage.heroTitlePrefix")}{" "}
                <span className={styles.heroHighlight}>
                  {t("domevPage.heroTitleHighlight")}
                </span>{" "}
                {t("domevPage.heroTitleSuffix")}
                <span className={styles.heroDot}>.</span>
              </h1>

              {/* Core Description Quote Foundation */}
              <p className={styles.coreDescription}>
                {t("domevPage.coreDescription")}
              </p>

              {/* Action Buttons: Primary Download CTA & Secondary Explore Button */}
              <div className={styles.heroActions}>
                <Link
                  to={ROUTES.DOWNLOAD_APP}
                  className={styles.primaryActionBtn}
                  aria-label={t("navbar.downloadApp")}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>{t("navbar.downloadApp")}</span>
                </Link>

                <a href="#ecosystem" className={styles.secondaryActionBtn}>
                  <span>{t("domevPage.exploreEcosystem")}</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                  </svg>
                </a>
              </div>

              {/* App Store & Google Play Store Badges */}
              <div className={styles.storeBadgesRow}>
                <div className={styles.storeIconsList}>
                  <Link
                    to={ROUTES.DOWNLOAD_APP}
                    className={styles.storeIconItem}
                    aria-label="Apple App Store"
                  >
                    <AppleIcon />
                  </Link>
                  <Link
                    to={ROUTES.DOWNLOAD_APP}
                    className={styles.storeIconItem}
                    aria-label="Google Play"
                  >
                    <GooglePlayIcon />
                  </Link>
                </div>
                <span className={styles.storeLabel}>
                  {t("domevPage.storeAvailability")}
                </span>
              </div>
            </motion.div>

            {/* Right Column: Smartphone Mockup featuring slide1.webp */}
            <motion.div className={styles.heroRight} variants={fadeUp}>
              <div className={styles.phoneChassis}>
                {/* Physical Side Buttons */}
                <div className={styles.phoneSideLeft}>
                  <div className={styles.phoneButton} />
                  <div className={styles.phoneButton} />
                </div>
                <div className={styles.phoneSideRight}>
                  <div className={styles.phoneButtonRight} />
                </div>

                {/* Top Notch / Dynamic Island */}
                <div className={styles.phoneTopNotch}>
                  <div className={styles.cameraLens} />
                </div>

                {/* Phone Screen displaying slide1.webp */}
                <div className={styles.phoneScreen}>
                  <img
                    src="/images/domev-logo remove.png"
                    alt="DOMEv App Screen"
                    className={styles.mockupSlideImg}
                    fetchPriority="high"
                    loading="eager"
                  />
                  <div className={styles.screenGloss} aria-hidden="true" />
                </div>

                {/* Home Indicator */}
                <div className={styles.phoneHomeBar} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 
          2. WHAT IS DOMEV 
           */}
      <section
        id="ecosystem"
        className={styles.ecosystemSection}
        aria-label="What is DOMEv"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>
              {t("domevPage.ecosystemEyebrow")}
            </span>
            <h2 className={styles.sectionTitle}>
              {t("domevPage.ecosystemTitle")}
            </h2>
            <p className={styles.sectionSubtitle}>
              {t("domevPage.ecosystemSubtitle")}
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {/* Pillar 1: Nationwide Network Aggregator */}
            <div className={styles.pillarCard}>
              <div className={styles.cardIconBox}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
              </div>
              <span className={styles.cardBadge}>
                {t("domevPage.pillar1Badge")}
              </span>
              <h3 className={styles.pillarTitle}>
                {t("domevPage.pillar1Title")}
              </h3>
              <p className={styles.pillarDesc}>{t("domevPage.pillar1Desc")}</p>
            </div>

            {/* Pillar 2: Real-Time Telemetry & Status */}
            <div className={styles.pillarCard}>
              <div className={styles.cardIconBox}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span className={styles.cardBadge}>
                {t("domevPage.pillar2Badge")}
              </span>
              <h3 className={styles.pillarTitle}>
                {t("domevPage.pillar2Title")}
              </h3>
              <p className={styles.pillarDesc}>{t("domevPage.pillar2Desc")}</p>
            </div>

            {/* Pillar 3: Intelligent Highway Route Planner */}
            <div className={styles.pillarCard}>
              <div className={styles.cardIconBox}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className={styles.cardBadge}>
                {t("domevPage.pillar3Badge")}
              </span>
              <h3 className={styles.pillarTitle}>
                {t("domevPage.pillar3Title")}
              </h3>
              <p className={styles.pillarDesc}>{t("domevPage.pillar3Desc")}</p>
            </div>

            {/* Pillar 4: Unified Mobile Wallet  */}
            <div className={styles.pillarCard}>
              <div className={styles.cardIconBox}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="5" width="20" height="14" rx="3" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                  <circle cx="17" cy="14.5" r="1.5" />
                  <path d="M6 14.5h4" />
                </svg>
              </div>
              <span className={styles.cardBadge}>
                {t("domevPage.pillar4Badge")}
              </span>
              <h3 className={styles.pillarTitle}>
                {t("domevPage.pillar4Title")}
              </h3>
              <p className={styles.pillarDesc}>{t("domevPage.pillar4Desc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DomevPage;
