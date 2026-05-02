import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Products from "../../components/sections/Products/Products";
import { fadeInUp } from "../../utils/animations";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      {/* Page Hero */}
      <section className={styles.heroSection}>

        <img
          src="/images/hero-products2.webp"
          alt=""
          aria-hidden="true"
          className={styles.heroBgImage}
          fetchpriority="high"
          loading="eager"
          decoding="sync"
        />

      
        <div className={styles.heroBackground} />
        

        <div className={styles.container}>
          <motion.div
            className={styles.headerContent}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className={styles.heroEyebrow}>{t("productsPage.eyebrow")}</span>
            <h1 className={styles.pageTitle}>
              {t("productsPage.pageTitle")}{" "}
              <span className={styles.titleHighlight}>
                {t("productsPage.pageTitleHighlight")}
              </span>
            </h1>
            <p className={styles.pageDescription}>
              {t("productsPage.pageDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      <Products />
    </div>
  );
};

export default ProductsPage;
