import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { fadeInUp } from "../../utils/animations";
import Button from "../../components/common/Button/Button";
import { ROUTES } from "../../constants/routes";
import styles from "./VideoTutorialsPage.module.css";

const VideoTutorialsPage = () => {
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
              {t("helpPages.videoTutorials")}
            </h1>
            <p className={styles.pageDescription}>
              {t("helpPages.videoTutorialsDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className={styles.bodySection}>
        <div className={styles.container}>
          <motion.div
            className={styles.bodyContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.placeholderCard}>
              <h2 className={styles.placeholderTitle}>
                {t("common.comingSoon")}
              </h2>
              <p className={styles.placeholderText}>
                {t("helpPages.videoTutorialsPlaceholder")}
              </p>
              <Link to={ROUTES.HOME}>
                <Button variant="secondary" size="large">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VideoTutorialsPage;
