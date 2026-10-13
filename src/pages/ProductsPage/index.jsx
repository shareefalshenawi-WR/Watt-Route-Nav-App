import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import Button from "../../components/common/Button/Button";
import styles from "./ProductsPage.module.css";

// Refined motion variants for silky-smooth cascading reveal
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

// Premium SVG Icons with fine details
const IconPin = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={styles.featureSvg}
  >
    <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
    <circle cx="12" cy="10" r="3" />
    <path d="M12 10v.01" />
  </svg>
);

const IconWallet = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={styles.featureSvg}
  >
    <rect x="2" y="5" width="20" height="14" rx="3" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <circle cx="17" cy="14.5" r="1.5" />
    <path d="M6 14.5h4" />
  </svg>
);

const IconBolt = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={styles.featureSvg}
  >
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="M13 7l-4 5h5l-2 5" />
    <circle cx="12" cy="18" r="0.5" fill="currentColor" />
  </svg>
);

const IconDownload = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={styles.ctaIcon}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      {/* Background Container with DOMEv Arch Canopy Scene */}
      <div className={styles.bgContainer}>
        <img
          src="/images/domev-products-bg.webp"
          alt="DOMEv EV Charging Superhub Canopy"
          aria-hidden="true"
          className={styles.bgImage}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className={styles.bgOverlay} />
        <div className={styles.ambientGlow} />
      </div>

      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
        
            {/* Main Headline */}
            <motion.h1 className={styles.title} variants={fadeUp}>
              {t("productsPage.titleLine1")} <br />
              <span className={styles.highlight}>
                {t("productsPage.titleHighlight")}
              </span>
            </motion.h1>

            {/* Description Card */}
            <motion.div className={styles.descriptionCard} variants={fadeUp}>
              <p className={styles.description}>
                {t("productsPage.description")}
              </p>
            </motion.div>
          </div>

          {/* Right Brand Showcase */}
          <motion.div className={styles.rightContent} variants={fadeUp}>
            <div className={styles.logoCard}>
              <img
                src="/images/domev-logo.webp"
                alt="DOMEv Logo"
                className={styles.logoImage}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width="340"
                height="100"
              />
              
            </div>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          className={styles.statsGrid}
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div
            className={styles.statCard}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>{IconPin}</div>
              <span className={styles.cardBadge}>
                {t("productsPage.card1Badge", "Nationwide Coverage")}
              </span>
            </div>
            <div className={styles.cardTextContent}>
              <h3 className={styles.cardTitle}>
                {t("productsPage.card1Title")}
              </h3>
              <p className={styles.cardDescription}>
                {t("productsPage.card1Desc")}
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className={styles.statCard}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>{IconWallet}</div>
              <span className={styles.cardBadge}>
                {t("productsPage.card2Badge", "Instant Payment")}
              </span>
            </div>
            <div className={styles.cardTextContent}>
              <h3 className={styles.cardTitle}>
                {t("productsPage.card2Title")}
              </h3>
              <p className={styles.cardDescription}>
                {t("productsPage.card2Desc")}
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className={styles.statCard}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>{IconBolt}</div>
              <span className={styles.cardBadge}>
                {t("productsPage.card3Badge", "Real-Time Telemetry")}
              </span>
            </div>
            <div className={styles.cardTextContent}>
              <h3 className={styles.cardTitle}>
                {t("productsPage.card3Title")}
              </h3>
              <p className={styles.cardDescription}>
                {t("productsPage.card3Desc")}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Banner Section */}
        <motion.div className={styles.bottomSection} variants={fadeUp}>
          <div className={styles.bottomCard}>
            <p className={styles.bottomText}>
              {t("productsPage.footerText")}
            </p>

            <div className={styles.ctaGroup}>
              <Link to={ROUTES.DOWNLOAD_APP} className={styles.ctaLink}>
                <Button variant="secondary" size="large" className={styles.ctaBtn}>
                  {IconDownload}
                  <span>{t("productsPage.downloadApp")}</span>
                </Button>
              </Link>
              <span className={styles.compatibilityTag}>
                {t("productsPage.appCompatibility", "Available for iOS & Android")}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductsPage;
