import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { fadeInUp, stagger } from "../../utils/animations";
import { ROUTES } from "../../constants/routes";
import styles from "./About.module.css";

// Simple robust icons 
const TargetIcon = () => (
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
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const EnergyIcon = () => (
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
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      {/* Hero Section */}
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
              {t("aboutPage.pageTitle")}{" "}
              <span className={styles.titleHighlight}>
                {t("aboutPage.pageTitleHighlight")}
              </span>
            </h1>
            <p className={styles.pageDescription}>
              {t("aboutPage.pageDescription")}
            </p>
            <div className={styles.headerButtons}>
              <Link to={ROUTES.DOWNLOAD_APP}>
                <Button variant="secondary" size="large">
                  {t("aboutPage.downloadMobileApp")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              {t("aboutPage.missionTitle")}{" "}
              <span className={styles.highlight}>
                {t("aboutPage.missionTitleHighlight")}
              </span>
            </h2>
            <p className={styles.sectionText}>
              {t("aboutPage.missionSubtitle")}
            </p>
          </motion.div>

          <motion.div
            className={styles.featuresGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className={styles.featureCard} variants={fadeInUp}>
              <div className={styles.featureIconWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>
                {t("aboutPage.drivingLeads")}
              </h3>
              <p className={styles.featureText}>
                {t("aboutPage.drivingLeadsDesc")}
              </p>
            </motion.div>

            <motion.div className={styles.featureCard} variants={fadeInUp}>
              <div className={styles.featureIconWrapper}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </div>
              <h3 className={styles.featureTitle}>
                {t("aboutPage.dataDrivenIntelligence")}
              </h3>
              <p className={styles.featureText}>{t("aboutPage.dataDesc")}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Global Goals Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              {t("aboutPage.alignedWith")}{" "}
              <span className={styles.highlight}>
                {t("aboutPage.alignedWithGlobalGoals")}
              </span>
            </h2>
          </motion.div>

          <motion.div
            className={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className={styles.valueCard} variants={fadeInUp}>
              <div
                className={`${styles.valueIcon} ${styles.iconGreen}`}
              >
                <TargetIcon />
              </div>
              <h3 className={styles.valueTitle}>
                {t("aboutPage.egyptVision2030")}
              </h3>
              <p className={styles.valueText}>
                {t("aboutPage.egyptVisionText")}
              </p>
            </motion.div>

            <motion.div className={styles.valueCard} variants={fadeInUp}>
              <div className={`${styles.valueIcon} ${styles.iconYellow}`}>
                <EnergyIcon />
              </div>
              <h3 className={styles.valueTitle}>{t("aboutPage.unSdg7")}</h3>
              <p className={styles.valueText}>
                <b>{t("aboutPage.unSdg7Title")}:</b>{" "}
                {t("aboutPage.unSdg7Text")}
              </p>
            </motion.div>

            <motion.div className={styles.valueCard} variants={fadeInUp}>
              <div className={`${styles.valueIcon} ${styles.iconBlue}`}>
                <GlobeIcon />
              </div>
              <h3 className={styles.valueTitle}>{t("aboutPage.unSdg13")}</h3>
              <p className={styles.valueText}>{t("aboutPage.unSdg13Text")}</p>
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
              {t("aboutPage.joinMovementTitle")}
            </h2>
            <p className={styles.ctaText}>{t("aboutPage.joinMovementDesc")}</p>
            <Link to={ROUTES.DOWNLOAD_APP}>
              <Button variant="secondary" size="large">
                {t("aboutPage.downloadMobileApp")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
