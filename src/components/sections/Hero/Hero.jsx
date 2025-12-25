/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../../common/Button/Button";
import { fadeInUp, slideInLeft, slideInRight } from "../../../utils/animations";
import { useScrollToSection } from "../../../hooks/useScrollToSection";
import { ROUTES } from "../../../constants/routes";
import styles from "./Hero.module.css";
import AnimatedCounter from "../../common/AnimatedCounter/AnimatedCounter";

const Hero = () => {
  const { t } = useTranslation();
  // Electric spark animation particles
  const sparkles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    duration: 1 + Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const scrollToSection = useScrollToSection();

  const handleDiscoverMore = () => {
    scrollToSection("download-app", {
      behavior: "smooth",
      block: "start",
      fallback: "bottom",
    });
  };

  const handleKeyDownDiscover = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDiscoverMore();
    }
  };

  // Use same-tab Link navigation for internal pages

  return (
    <section className={styles.hero}>
      {/* Electric Animated Background */}
      <div className={styles.backgroundImage}>
        {/*  Hero background image */}
        <img
          src="/images/hero-bg.png"
          alt="EV Charging Stations"
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Text Content */}
          <motion.div
            className={styles.textContent}
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles.title} variants={fadeInUp}>
              {t("hero.title")}{" "}
              <span className={styles.highlight}>
                {t("hero.titleHighlight")}
              </span>
            </motion.h1>

            <motion.p className={styles.subtitle} variants={fadeInUp}>
              {t("hero.subtitle")}
            </motion.p>

            <motion.div className={styles.ctaButtons} variants={fadeInUp}>
              <Link to={ROUTES.FIND_CHARGING_STATIONS}>
                <Button variant="secondary" size="large">
                  {t("hero.findChargingStations")}
                </Button>
              </Link>
              <Link to={ROUTES.DOWNLOAD_APP}>
                <Button variant="outline" size="large">
                  {t("hero.downloadMobileApp")}
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div className={styles.stats} variants={fadeInUp}>
              <div className={styles.stat}>
                <motion.span
                  className={styles.statNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <AnimatedCounter target={400} duration={1200} suffix="+" />
                </motion.span>
                <span className={styles.statLabel}>
                  {t("hero.chargingPoints")}
                </span>
              </div>
              <div className={styles.stat}>
                <motion.span
                  className={styles.statNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <AnimatedCounter
                    target={99.9}
                    duration={1400}
                    decimals={1}
                    suffix="%"
                  />
                </motion.span>
                <span className={styles.statLabel}>
                  {t("hero.uptimeReliability")}
                </span>
              </div>
              <div className={styles.stat}>
                <motion.span
                  className={styles.statNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <AnimatedCounter target={120} duration={1200} suffix="kW" />
                </motion.span>
                <span className={styles.statLabel}>
                  {t("hero.ultraFastCharging")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.imageContent}
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            {/*  Hero product image */}
            {/* <div className={styles.heroImage}>
              <img
                src="/images/charging-station.webp"
                alt="Watt Route Charging Station"
                className={styles.productImage}
              />
              <div className={styles.glowEffect}></div>
            </div> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        role="button"
        tabIndex={0}
        onClick={handleDiscoverMore}
        onKeyDown={handleKeyDownDiscover}
        style={{ cursor: "pointer" }}
      >
        <span>{t("hero.discoverMore")}</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  );
};

export default Hero;
