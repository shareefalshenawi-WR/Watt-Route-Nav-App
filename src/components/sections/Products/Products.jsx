import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeInUp, scaleIn } from "../../../utils/animations";
import styles from "./Products.module.css";

const domevFeatures = [
  { icon: "🗺️", labelKey: "products.featureMap" },
  { icon: "⚡", labelKey: "products.featureCharging" },
  { icon: "💳", labelKey: "products.featurePayment" },
  { icon: "🔔", labelKey: "products.featureNotifications" },
  { icon: "📊", labelKey: "products.featureAnalytics" },
  { icon: "🛡️", labelKey: "products.featureSecurity" },
];

const Products = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className={styles.eyebrow}>{t("products.eyebrow")}</span>
          <h2 className={styles.title}>{t("products.title")}</h2>
          <p className={styles.subtitle}>{t("products.subtitle")}</p>
        </motion.div>

        {/* Main Product Layout */}
        <div className={styles.productLayout}>
          {/* Left: Info Block */}
          <motion.div
            className={styles.infoBlock}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className={styles.productBadge}>
              <span className={styles.badgeDot} />
              {t("products.badge")}
            </div>

            <h3 className={styles.productName}>DOMEv</h3>
            <p className={styles.productTagline}>{t("products.tagline")}</p>
            <p className={styles.productDescription}>
              {t("products.description")}
            </p>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              {domevFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={styles.featureChip}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <span className={styles.featureIcon}>{feature.icon}</span>
                  <span className={styles.featureLabel}>
                    {t(feature.labelKey)}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            {/*replace with the new link : href= "New link here" */}
            <a
              href="https://forms.gle/Nea31hejYAvMawrR6"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              id="domev-register-interest-btn"
            >
              <span className={styles.ctaButtonInner}>
                <span className={styles.ctaIcon}></span>
                {t("products.ctaButton")}
              </span>
              <span className={styles.ctaArrow}>→</span>
            </a>

            <p className={styles.ctaSubtext}>{t("products.ctaSubtext")}</p>
          </motion.div>

          {/* Right: iPhone Mockup */}
          <motion.div
            className={styles.mockupWrapper}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* iPhone Frame */}
            <div className={styles.iphone}>
              <div className={styles.iphoneFrame}>
                {/* Screen Content */}
                <div className={styles.iphoneScreen}>
                  <img
                    src="/images/domev-logo.webp"
                    alt="DOMEv Logo"
                    className={styles.appLogo}
                    fetchpriority="high"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
