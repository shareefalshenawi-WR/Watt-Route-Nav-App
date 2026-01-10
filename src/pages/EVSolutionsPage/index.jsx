import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import EVSolutions from "../../components/sections/EVSolutions/EVSolutions";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { fadeInUp, stagger } from "../../utils/animations";
import { ROUTES } from "../../constants/routes";
import styles from "./EVSolutionsPage.module.css";

// --- SVG Icons ---
const TrophyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const LightningIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const BulbIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
    <path d="M9 21h6" />
  </svg>
);

const EVSolutionsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <div className={styles.container}>
          <motion.div
            className={styles.headerContent}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className={styles.pageTitle}>
              {t("evSolutionsPage.pageTitle")}{" "}
              <span className={styles.titleHighlight}>
                {t("evSolutionsPage.pageTitleHighlight")}
              </span>
            </h1>
            <p className={styles.pageDescription}>
              {t("evSolutionsPage.pageDescription")}
            </p>
            <div className={styles.headerButtons}>
              <Link to={ROUTES.DOWNLOAD_APP}>
                <Button variant="secondary" size="large">
                  {t("evSolutionsPage.downloadApp")}
                </Button>
              </Link>
              <Link to={ROUTES.PRODUCTS}>
                <Button variant="outline" size="large">
                  {t("evSolutionsPage.viewProducts")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <EVSolutions />

      {/* Why Choose Us Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <motion.div
            className={styles.whyContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              {t("evSolutionsPage.whyChoose")}
            </h2>
            <motion.div 
              className={styles.benefitsGrid}
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div className={styles.benefit} variants={fadeInUp}>
                <div className={`${styles.benefitIcon} ${styles.iconYellow}`}>
                  <TrophyIcon />
                </div>
                <h3 className={styles.benefitTitle}>
                  {t("evSolutionsPage.industryLeading")}
                </h3>
                <p className={styles.benefitText}>
                  {t("evSolutionsPage.industryLeadingText")}
                </p>
              </motion.div>

              <motion.div className={styles.benefit} variants={fadeInUp}>
                <div className={`${styles.benefitIcon} ${styles.iconBlue}`}>
                  <LightningIcon />
                </div>
                <h3 className={styles.benefitTitle}>
                  {t("evSolutionsPage.ultraFastCharging")}
                </h3>
                <p className={styles.benefitText}>
                  {t("evSolutionsPage.ultraFastChargingText")}
                </p>
              </motion.div>

              <motion.div className={styles.benefit} variants={fadeInUp}>
                <div className={`${styles.benefitIcon} ${styles.iconGreen}`}>
                  <GlobeIcon />
                </div>
                <h3 className={styles.benefitTitle}>
                  {t("evSolutionsPage.nationwideCoverage")}
                </h3>
                <p className={styles.benefitText}>
                  {t("evSolutionsPage.nationwideCoverageText")}
                </p>
              </motion.div>

              <motion.div className={styles.benefit} variants={fadeInUp}>
                <div className={`${styles.benefitIcon} ${styles.iconTeal}`}>
                  <BulbIcon />
                </div>
                <h3 className={styles.benefitTitle}>
                  {t("evSolutionsPage.smartTechnology")}
                </h3>
                <p className={styles.benefitText}>
                  {t("evSolutionsPage.smartTechnologyText")}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.ctaTitle}>
              {t("evSolutionsPage.readyToGetStarted")}
            </h2>
            <p className={styles.ctaText}>
              {t("evSolutionsPage.readyToGetStartedDesc")}
            </p>
            <Link to={ROUTES.FIND_CHARGING_STATIONS}>
              <Button variant="secondary" size="large">
                {t("evSolutionsPage.findNearestStation")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default EVSolutionsPage;
