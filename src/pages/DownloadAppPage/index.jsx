import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./DownloadAppPage.module.css";

const DownloadAppPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      {/* Background Image & Overlay */}
      <div className={styles.bgWrapper}>
        <img 
          src="/images/coming-soon bg.png" 
          alt="Background" 
          className={styles.bgImage} 
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* Animated background particles */}
      <div className={styles.particles}>
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className={styles.particle} />
        ))}
      </div>


      {/* Content */}
      <div className={styles.contentContainer}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* DOMEv Logo */}
          <motion.div
            className={styles.logoWrapper}
            initial={{ opacity: 0, y: -40, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className={styles.logoGlow} />
            <img
              src="/images/domev-logo remove.png"
              alt="DOMEv Logo"
              className={styles.logo}
            />
          </motion.div>



          {/* Coming Soon heading */}
          <motion.h1
            className={styles.comingSoonTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            {t("downloadAppPage.comingSoonTitle", "Coming Soon")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={styles.comingSoonText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            {t(
              "downloadAppPage.comingSoonText",
              "We're putting the finishing touches on something amazing. The DOMEv app is launching soon — stay tuned."
            )}
          </motion.p>

          {/* Divider */}
          <motion.div
            className={styles.divider}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          />

          {/* Store badges — disabled, greyed out */}
          <motion.div
            className={styles.storeButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className={styles.storeButtonWrapper}>
              <img
                src="/images/app-store.webp"
                alt="App Store"
                className={styles.storeImage}
              />
              <span className={styles.storeComingTag}>
                {t("downloadAppPage.soon", "Soon")}
              </span>
            </div>
            <div className={styles.storeButtonWrapper}>
              <img
                src="/images/google-play.webp"
                alt="Google Play"
                className={styles.storeImage}
              />
              <span className={styles.storeComingTag}>
                {t("downloadAppPage.soon", "Soon")}
              </span>
            </div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div
            className={styles.homeAction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
          >
            <Link to="/" className={styles.homeButton} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              {t("downloadAppPage.returnHome", "Return to Home")}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default DownloadAppPage;
