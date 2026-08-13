import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeInUp, scaleIn } from "../../../utils/animations";
import styles from "./Products.module.css";

const slides = [
  "/images/Slider/slide1.webp",
  "/images/Slider/slide2.webp",
  "/images/Slider/slide3.webp",
  "/images/Slider/slide4.webp",
  "/images/Slider/slide5.webp",
];

const domevFeatures = [
  { icon: "/images/icons/map-svgrepo-com.svg", labelKey: "products.featureMap" },
  { icon: "/images/icons/model-x-charge.svg", labelKey: "products.featureCharging" },
  { icon: "/images/icons/wallet.svg", labelKey: "products.featurePayment" },
  { icon: "/images/icons/alert-16-regular.svg", labelKey: "products.featureNotifications" },
  { icon: "/images/icons/insights.svg", labelKey: "products.featureAnalytics" },
  { icon: "/images/icons/secure.svg", labelKey: "products.featureSecurity" },
];

const Products = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
                  <span className={styles.featureIcon}>
                    <img src={feature.icon} alt="" className={styles.featureIconImg} aria-hidden="true" />
                  </span>
                  <span className={styles.featureLabel}>
                    {t(feature.labelKey)}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://forms.gle/XZUDvYsu9Kk9NmeY6"
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
            {/* arrow buttons on mobile screens */}
            <div className={styles.navWrapper}>
              <button
                className={styles.sliderArrow}
                onClick={goPrev}
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* iPhone Frame */}
              <div className={styles.iphone}>
                {/* Left Side Buttons */}
                <div className={styles.iphoneSideLeft}>
                  <div className={styles.iphoneButton} />
                  <div className={styles.iphoneButton} />
                </div>
                {/* Right Side Button */}
                <div className={styles.iphoneSideRight}>
                  <div className={styles.iphoneButtonRight} />
                </div>

                <div className={styles.iphoneFrame}>
                  {/* Dynamic Island / Notch */}
                  <div className={styles.iphoneNotch} />

                  {/* Screen Content */}
                  <div className={styles.iphoneScreen}>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentSlide}
                        src={slides[currentSlide]}
                        alt={`DOMEv App Slide ${currentSlide + 1}`}
                        className={styles.slideImage}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    </AnimatePresence>

                    {/* Slider Dots */}
                    <div className={styles.sliderDots}>
                      {slides.map((_, idx) => (
                        <button
                          key={idx}
                          className={`${styles.sliderDot} ${
                            idx === currentSlide ? styles.sliderDotActive : ""
                          }`}
                          onClick={() => setCurrentSlide(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Home Indicator Bar */}
                  <div className={styles.iphoneBottom}>
                    <div className={styles.iphoneHomeBar} />
                  </div>
                </div>
              </div>

              {/* arrow button */}
              <button
                className={styles.sliderArrow}
                onClick={goNext}
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
