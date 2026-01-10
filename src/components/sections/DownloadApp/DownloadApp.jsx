/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AsyncImage from "../../common/AsyncImage/AsyncImage";
import { fadeInUp, slideInLeft, slideInRight } from "../../../utils/animations";
import { ROUTES } from "../../../constants/routes";
import styles from "./DownloadApp.module.css";

const DownloadApp = () => {
  const { t } = useTranslation();
  const [activeScreen, setActiveScreen] = useState(0);

  const features = [
    t("downloadAppSection.feature1"),
    t("downloadAppSection.feature2"),
    t("downloadAppSection.feature3"),
    t("downloadAppSection.feature4"),
    t("downloadAppSection.feature5"),
    t("downloadAppSection.feature6"),
  ];

  const appScreens = [
    {
      id: 1,
      image: "/images/app-screen-1.webp",
      title: t("downloadAppSection.screenFindStations"),
      description: t("downloadAppSection.screenFindStationsDesc"),
    },
    {
      id: 2,
      image: "/images/app-screen-2.webp",
      title: t("downloadAppSection.screenOpenMap"),
      description: t("downloadAppSection.screenOpenMapDesc"),
    },
    {
      id: 3,
      image: "/images/app-screen-3.webp",
      title: t("downloadAppSection.screenNearbyCharging"),
      description: t("downloadAppSection.screenNearbyChargingDesc"),
    },
    {
      id: 4,
      image: "/images/app-screen-4.webp",
      title: t("downloadAppSection.screenWallet"),
      description: t("downloadAppSection.screenWalletDesc"),
    },
  ];

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % appScreens.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveScreen(index);
  };

  const handlePrevScreen = () => {
    setActiveScreen(
      (prev) => (prev - 1 + appScreens.length) % appScreens.length
    );
  };

  const handleNextScreen = () => {
    setActiveScreen((prev) => (prev + 1) % appScreens.length);
  };

  return (
    <section id="download-app" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Side - Text & Features */}
          <motion.div
            className={styles.textContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <motion.h2 className={styles.title} variants={fadeInUp}>
              {t("downloadAppSection.title")}{" "}
              <span className={styles.highlight}>
                {t("downloadAppSection.titleHighlight")}
              </span>{" "}
              {t("downloadAppSection.titleEnd")}
            </motion.h2>

            <motion.p className={styles.description} variants={fadeInUp}>
              {t("downloadAppSection.description")}
            </motion.p>

            {/* Features List */}
            <motion.ul className={styles.featuresList} variants={fadeInUp}>
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className={styles.featureItem}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={styles.checkIcon}>✓</span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            {/* Download Buttons */}
            <motion.div className={styles.downloadButtons} variants={fadeInUp}>
              {/*  App Store button */}
              <Link to={ROUTES.DOWNLOAD_APP} className={styles.storeButton}>
                <AsyncImage
                  src="/images/app-store.webp"
                  alt={t("downloadAppSection.appStoreAlt")}
                  className={styles.storeImage}
                />
              </Link>

              {/*  Google Play button */}
              <Link to={ROUTES.DOWNLOAD_APP} className={styles.storeButton}>
                <AsyncImage
                  src="/images/google-play.webp"
                  alt={t("downloadAppSection.googlePlayAlt")}
                  className={styles.storeImage}
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - iPhone Mockup with Carousel */}
          <motion.div
            className={styles.phoneContent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <div className={styles.iphoneMockup}>
              {/* iPhone 15 Pro Frame */}
              <div className={styles.iphoneFrame}>
                {/* Dynamic Island */}
                <div className={styles.dynamicIsland}></div>

                {/* Screen Content - Auto Carousel */}
                <div className={styles.screenContainer}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen}
                      className={styles.screen}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.6 }}
                    >
                      {/*  App Screenshot */}
                      <AsyncImage
                        src={appScreens[activeScreen].image}
                        alt={appScreens[activeScreen].title}
                        className={styles.screenImage}
                      />

                      {/* Screen Info */}
                      <div className={styles.screenInfo}>
                        <h3>{appScreens[activeScreen].title}</h3>
                        <p>{appScreens[activeScreen].description}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className={styles.dotsContainer}>
                {appScreens.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${
                      activeScreen === index ? styles.activeDot : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to screen ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows - Mobile Only */}
              <div className={styles.arrowsContainer}>
                <button
                  className={styles.arrowBtn}
                  onClick={handlePrevScreen}
                  aria-label="Previous screen"
                >
                  ←
                </button>
                <button
                  className={styles.arrowBtn}
                  onClick={handleNextScreen}
                  aria-label="Next screen"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
