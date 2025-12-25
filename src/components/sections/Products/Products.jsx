import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../../common/Button/Button";
import { fadeInUp, scaleIn } from "../../../utils/animations";
import styles from "./Products.module.css";

const Products = () => {
  const { t } = useTranslation();
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: 1,
      nameKey: "products.exploreMap",
      // tagline: "DC *120",
      descKey: "products.exploreMapDesc",
      //  Product image placeholder
      image: "/images/products/dc-charger-120.webp",
      specs: [
        { icon: "⚡", labelKey: "products.allChargers" },
        // { icon: "💳", labelKey: "products.flexiblePayments" },
        // { icon: "☔", labelKey: "products.weatherResistant" },
        // { icon: "🔄", labelKey: "products.dcFastCharger" },
        { icon: "🕐", labelKey: "products.realTimeStatus" },
        // { icon: "📊", labelKey: "products.smartEnergyDistribution" },
        { icon: "📱", labelKey: "products.mobileApp" },
        // { icon: "📈", labelKey: "products.realTimeMonitoring" },
      ],
    },
    {
      id: 2,
      nameKey: "products.unifiedPayment",
      // tagline: "DC *60",
      descKey: "products.unifiedPaymentDesc",
      image: "/images/products/dc-charger-60.webp",
      specs: [
        // { icon: "⚡", labelKey: "products.fastCharging" },
        { icon: "💳", labelKey: "products.securePayments" },
        // { icon: "☔", labelKey: "products.outdoorReady" },
        // { icon: "🔌", labelKey: "products.universalCompatibility" },
        { icon: "🕐", labelKey: "products.support24" },
        // { icon: "📱", labelKey: "products.appControl" },
      ],
    },
    {
      id: 3,
      nameKey: "products.smartRoutePlanning",
      // tagline: "AC *22",
      descKey: "products.smartRoutePlanningDesc",
      image: "/images/products/ac-charger-22.webp",
      specs: [
        { icon: "🗺️", labelKey: "products.smartRouting" },
        { icon: "🔐", labelKey: "products.safePlanning" },
        { icon: "🌿", labelKey: "products.peaceOfMind" },
        //   { icon: "📱", labelKey: "products.smartControl" },
        //   { icon: "⏰", labelKey: "products.scheduledCharging" },
        //   { icon: "📊", labelKey: "products.energyTracking" },
      ],
    },
  ];

  return (
    <section className={styles.section} id="products">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className={styles.title}>{t("products.title")}</h2>
          <p className={styles.subtitle}>{t("products.subtitle")}</p>
        </motion.div>

        {/* Product Tabs */}
        <div className={styles.productTabs}>
          {products.map((product, index) => (
            <button
              key={product.id}
              className={`${styles.tab} ${
                activeProduct === index ? styles.activeTab : ""
              }`}
              onClick={() => setActiveProduct(index)}
            >
              {t(product.nameKey)}
            </button>
          ))}
        </div>

        {/* Active Product Display */}
        <motion.div
          className={styles.productDisplay}
          key={activeProduct}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.productContent}>
            {/* Product Info */}
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>
                {t(products[activeProduct].nameKey)}
              </h3>
              <p className={styles.productDescription}>
                {t(products[activeProduct].descKey)}
              </p>

              {/* Specifications */}
              <div className={styles.specifications}>
                <h4 className={styles.specsTitle}>
                  {t("products.specsTitle")}
                  <span className={styles.specsCount}>
                    {products[activeProduct].specs.length} features
                  </span>
                </h4>
                <div className={styles.specsGrid}>
                  {products[activeProduct].specs.map((spec, index) => (
                    <motion.div
                      key={index}
                      className={styles.specItem}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className={styles.specIcon}>{spec.icon}</span>
                      <span className={styles.specLabel}>
                        {t(spec.labelKey)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className={styles.productImageWrapper}>
              {/*  Product image */}
              <motion.div
                className={styles.productImage}
                variants={scaleIn}
                initial="hidden"
                animate="visible"
              >
                <img
                  src={products[activeProduct].image}
                  alt={t(products[activeProduct].nameKey)}
                  className={styles.image}
                />
                <div className={styles.productGlow}></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Product Slider Indicators */}
        <div className={styles.sliderIndicators}>
          {products.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                activeProduct === index ? styles.activeIndicator : ""
              }`}
              onClick={() => setActiveProduct(index)}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
