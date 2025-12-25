import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../../components/common/Button/Button";
import { Link } from "react-router-dom";
import { fadeInUp } from "../../utils/animations";
import { ROUTES } from "../../constants/routes";
import styles from "./About.module.css";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <motion.div
            className={styles.headerContent}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className={styles.pageTitle}>
              {t("aboutPage.pageTitle")}{" "}
              <span className={styles.highlight}>
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

      <section className={styles.mission}>
        <div className={styles.container}>
          <motion.div
            className={styles.missionContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              {t("aboutPage.missionTitle")}
            </h2>{" "}
            <h2 className={styles.highlight}>
              {t("aboutPage.missionTitleHighlight")}
            </h2>
            <p className={styles.sectionText}>
              {t("aboutPage.missionSubtitle")}
            </p>
            <h2 className={styles.sectionTitle}>
              {t("aboutPage.empoweringCPOs")}
            </h2>
            <div className={styles.subsectionGrid}>
              <div className={styles.subsectionBlock}>
                <h3 className={styles.subsectionTitle}>
                  {t("aboutPage.drivingLeads")}
                </h3>
                <p className={styles.subsectionText}>
                  {t("aboutPage.drivingLeadsDesc")}
                </p>
              </div>

              <div className={styles.subsectionBlock}>
                <h3 className={styles.subsectionTitle}>
                  {t("aboutPage.dataDrivenIntelligence")}
                </h3>
                <p className={styles.subsectionText}>
                  {t("aboutPage.dataDesc")}
                </p>
              </div>
            </div>
            <h2 className={styles.sectionTitle}>
              {t("aboutPage.alignedWith")}
            </h2>
            <h2 className={styles.highlight}>
              {t("aboutPage.alignedWithGlobalGoals")}
            </h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🟩</div>
                <h3 className={styles.valueTitle}>
                  {t("aboutPage.egyptVision2030")}
                </h3>
                <p className={styles.valueText}>
                  {t("aboutPage.egyptVisionText")}
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>☀️</div>
                <h3 className={styles.valueTitle}>{t("aboutPage.unSdg7")}</h3>
                <p className={styles.valueText}>
                  <b>{t("aboutPage.unSdg7Title")}:</b>
                  {t("aboutPage.unSdg7Text")}
                </p>
              </div>

              <div className={styles.valueCard}>
                <div className={styles.valueIcon}>🌍</div>
                <h3 className={styles.valueTitle}>{t("aboutPage.unSdg13")}</h3>
                <p className={styles.valueText}>{t("aboutPage.unSdg13Text")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
