import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AsyncImage from "../../components/common/AsyncImage/AsyncImage";
import { fadeInUp } from "../../utils/animations";
import styles from "./DownloadAppPage.module.css";

const DownloadAppPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      <div className={styles.mapContainer}>
        {/* Background Map Image - Placeholder */}
        <div className={styles.mapBackground}>
          <AsyncImage
            src="/images/map-background.webp"
            alt="Map Background"
            className={styles.mapImage}
            onError={() => {
              // Fallback handled by AsyncImage
            }}
          />
          <div className={styles.mapOverlay}></div>
        </div>

        {/* Content Container */}
        <div className={styles.contentContainer}>
          <motion.div
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            {/* Logo with Pin Animation */}
            <motion.div
              className={styles.logoContainer}
              initial={{ opacity: 0, y: -50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Map Pin */}
              <motion.div
                className={styles.mapPin}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 0C18.954 0 10 8.954 10 20C10 35 30 60 30 60C30 60 50 35 50 20C50 8.954 41.046 0 30 0Z"
                    fill="var(--color-secondary)"
                  />
                  <circle cx="30" cy="20" r="8" fill="white" />
                </svg>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <AsyncImage
                  src="/images/logo.webp"
                  alt="Watt Route Logo"
                  className={styles.logo}
                />
              </motion.div>
            </motion.div>

            {/* Coming Soon Message */}
            <motion.div
              className={styles.messageContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <h1 className={styles.comingSoonTitle}>
                {t("downloadAppPage.comingSoonTitle")}
              </h1>
              <p className={styles.comingSoonText}>
                {t("downloadAppPage.comingSoonText")}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppPage;
