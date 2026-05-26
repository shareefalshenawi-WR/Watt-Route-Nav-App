import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { fadeInUp } from "../../utils/animations";
import Button from "../../components/common/Button/Button";
import styles from "./ProductsPage.module.css";

// SVGs defined outside component — avoids re-creation on every render
const IconPin = (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconWallet = (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);

const IconBolt = (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
    <line x1="12" y1="18" x2="12" y2="18"/>
    <path d="M12 6l-3 4h6l-3 4"/>
  </svg>
);

const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      {/* Background Container */}
      <div className={styles.bgContainer}>
        <img
          src="/images/domev-products-bg.webp"
          alt=""
          aria-hidden="true"
          className={styles.bgImage}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className={styles.bgOverlay} />
      </div>

      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.topSection}>
          <div className={styles.leftContent}>
            <motion.h1 
              className={styles.title}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              {t("productsPage.titleLine1")} <br />
              <span className={styles.highlight}>{t("productsPage.titleHighlight")}</span>
            </motion.h1>
            
            <motion.p 
              className={styles.description}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              {t("productsPage.description")}
            </motion.p>
          </div>

          <div className={styles.rightContent}>
            <img
              src="/images/domev-logo.webp"
              alt="DOMEv Logo"
              className={styles.logoImage}
              fetchPriority="low"
              loading="lazy"
              decoding="async"
              width="400"
              height="auto"
            />
          </div>
        </div>

        {/* Middle Section */}
        <motion.div 
          className={styles.statsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          {/* Card 1 */}
          <div className={styles.statCard}>
            <div className={styles.iconWrapper}>{IconPin}</div>
            <div className={styles.cardTextContent}>
              <h3 className={styles.cardTitle}>{t("productsPage.card1Title")}</h3>
              <p className={styles.cardDescription}>
                {t("productsPage.card1Desc")}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.statCard}>
            <div className={styles.iconWrapper}>{IconWallet}</div>
            <div className={styles.cardTextContent}>
              <h3 className={styles.cardTitle}>{t("productsPage.card2Title")}</h3>
              <p className={styles.cardDescription}>
                {t("productsPage.card2Desc")}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.statCard}>
            <div className={styles.iconWrapper}>{IconBolt}</div>
            <div className={styles.cardTextContent}>
              <h3 className={styles.cardTitle}>{t("productsPage.card3Title")}</h3>
              <p className={styles.cardDescription}>
                {t("productsPage.card3Desc")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.div 
          className={styles.bottomSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <p className={styles.bottomText}>
            {t("productsPage.footerText")}
          </p>

          {/* Download App Button */}
          <div className={styles.ctaWrapper}>
            <Link to={ROUTES.DOWNLOAD_APP}>
              <Button variant="secondary" size="large">
                {t("productsPage.downloadApp")}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
