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
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundImage}>
        {/* Hero background image */}
        <img
          src="/images/hero-bg.webp"
          alt="EV Charging Stations"
          className={styles.bgImage}
          fetchPriority="high"
          decoding="sync"
          loading="eager"
          width="1920"
          height="1080"
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
              <Link to={ROUTES.DOWNLOAD_APP}>
                <Button variant="secondary" size="large">
                  {t("hero.downloadMobileApp")}
                </Button>
              </Link>
            </motion.div>

            <div className={styles.goalShowcaseResponsive}>
              <div className={styles.goalCardResponsive}>
                <div className={styles.goalImageWrapResponsive}>
                  <img
                    src="/images/Global Goals/Egypt Vision 2030.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.goalImageResponsive}
                  />
                </div>
                <span className={styles.goalTitleResponsive}>
                  {t("aboutPage.egyptVision2030")}
                </span>
              </div>

              <div className={styles.goalCardResponsive}>
                <div className={styles.goalImageWrapResponsive}>
                  <img
                    src="/images/Global Goals/Goal-07.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.goalImageResponsive}
                  />
                </div>
                <span className={styles.goalTitleResponsive}>
                  {t("aboutPage.unSdg7")}
                </span>
              </div>

              <div className={styles.goalCardResponsive}>
                <div className={styles.goalImageWrapResponsive}>
                  <img
                    src="/images/Global Goals/SDG 13.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.goalImageResponsive}
                  />
                </div>
                <span className={styles.goalTitleResponsive}>
                  {t("aboutPage.unSdg13")}
                </span>
              </div>
            </div>

            {/* Stats */}
            <motion.div className={styles.stats} variants={fadeInUp}>
              <div className={styles.stat}>
                <motion.span
                  className={styles.statNumber}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <AnimatedCounter target={600} duration={1200} suffix="+" />
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
                  <AnimatedCounter target={160} duration={1200} suffix="kW" />
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
            <div className={styles.goalShowcase}>
              <div className={styles.goalCard}>
                <div className={styles.goalImageWrap}>
                  <img
                    src="/images/Global Goals/Egypt Vision 2030.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.goalImage}
                  />
                </div>
                <span className={styles.goalTitle}>
                  {t("aboutPage.egyptVision2030")}
                </span>
              </div>

              <div className={styles.goalCard}>
                <div className={styles.goalImageWrap}>
                  <img
                    src="/images/Global Goals/Goal-07.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.goalImage}
                  />
                </div>
                <span className={styles.goalTitle}>
                  {t("aboutPage.unSdg7")}
                </span>
              </div>

              <div className={styles.goalCard}>
                <div className={styles.goalImageWrap}>
                  <img
                    src="/images/Global Goals/SDG 13.png"
                    alt=""
                    aria-hidden="true"
                    className={styles.goalImage}
                  />
                </div>
                <span className={styles.goalTitle}>
                  {t("aboutPage.unSdg13")}
                </span>
              </div>
            </div>
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
