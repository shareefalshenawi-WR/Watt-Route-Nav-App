import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import EVSolutions from "../../components/sections/EVSolutions/EVSolutions";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { fadeInUp, stagger } from "../../utils/animations";
import { ROUTES } from "../../constants/routes";
import styles from "./EVSolutionsPage.module.css";

const EVSolutionsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img
            src="/images/pages/EVSolutions page.webp"
            alt=""
            aria-hidden="true"
            className={styles.heroBgImage}
            fetchPriority="high"
            decoding="sync"
            loading="eager"
          />
          <div className={styles.heroOverlay} />
        </div>
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
                  <img src="/images/icons/trophy.svg" alt="" className={styles.benefitIconImg} aria-hidden="true" />
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
                  <img src="/images/icons/lightning-mood.svg" alt="" className={styles.benefitIconImg} aria-hidden="true" />
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
                  <img src="/images/icons/globe.svg" alt="" className={styles.benefitIconImg} aria-hidden="true" />
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
                  <img src="/images/icons/creativity-idea-bulb.svg" alt="" className={styles.benefitIconImg} aria-hidden="true" />
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
            <Link to={ROUTES.DOWNLOAD_APP}>
              <Button variant="secondary" size="large">
                {t("evSolutionsPage.downloadApp")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};


export default EVSolutionsPage;
