import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Support from "../../components/sections/Support/Support";
import Button from "../../components/common/Button/Button";
import { fadeInUp } from "../../utils/animations";
import { ROUTES } from "../../constants/routes";
import styles from "./SupportPage.module.css";

const SupportPage = () => {
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
              {t("supportPage.pageTitle")}{" "}
              <span className={styles.titleHighlight}>
                {t("supportPage.pageTitleHighlight")}
              </span>
            </h1>
            <p className={styles.pageDescription}>
              {t("supportPage.pageDescription")}
            </p>

            {/* Quick Search */}
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder={t("supportPage.searchPlaceholder")}
                className={styles.searchInput}
              />
              <Button variant="secondary">
                {t("supportPage.searchButton")}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <Support />

      {/* Help Center */}
      <section className={styles.helpCenter}>
        <div className={styles.container}>
          <motion.div
            className={styles.helpContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.sectionTitle}>
              {t("supportPage.helpCenterTitle")}
            </h2>
            <div className={styles.helpGrid}>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>📖</div>
                <h3 className={styles.helpTitle}>
                  {t("supportPage.userGuideTitle")}
                </h3>
                <p className={styles.helpText}>
                  {t("supportPage.userGuideDesc")}
                </p>
                <Link to={ROUTES.HELP_USER_GUIDE} className={styles.helpLink}>
                  {t("supportPage.readGuide")}
                </Link>
              </div>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>🎥</div>
                <h3 className={styles.helpTitle}>
                  {t("supportPage.videoTutorialsTitle")}
                </h3>
                <p className={styles.helpText}>
                  {t("supportPage.videoTutorialsDesc")}
                </p>
                <Link
                  to={ROUTES.HELP_VIDEO_TUTORIALS}
                  className={styles.helpLink}
                >
                  {t("supportPage.watchVideos")}
                </Link>
              </div>
              <div className={styles.helpCard}>
                <div className={styles.helpIcon}>💬</div>
                <h3 className={styles.helpTitle}>
                  {t("supportPage.communityForumTitle")}
                </h3>
                <p className={styles.helpText}>
                  {t("supportPage.communityForumDesc")}
                </p>
                <Link
                  to={ROUTES.HELP_COMMUNITY_FORUM}
                  className={styles.helpLink}
                >
                  {t("supportPage.joinForum")}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
