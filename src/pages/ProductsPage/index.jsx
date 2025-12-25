import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Products from "../../components/sections/Products/Products";
import Button from "../../components/common/Button/Button";
import Card from "../../components/common/Card/Card";
import { fadeInUp, stagger } from "../../utils/animations";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className={styles.container}>
          <motion.div
            className={styles.headerContent}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className={styles.pageTitle}>
              {t("productsPage.pageTitle")}{" "}
              <span className={styles.highlight}>
                {t("productsPage.pageTitleHighlight")}
              </span>
            </h1>
            <p className={styles.pageDescription}>
              {t("productsPage.pageDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <Products />

      {/* Features Comparison */}
      <section className={styles.comparisonSection}>
        <div className={styles.container}></div>
      </section>
    </div>
  );
};

export default ProductsPage;
