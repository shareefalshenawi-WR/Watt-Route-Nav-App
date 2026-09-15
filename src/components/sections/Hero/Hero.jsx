import { useRef, useLayoutEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../common/Button/Button";
import { fadeInUp } from "../../../utils/animations";
import { useScrollToSection } from "../../../hooks/useScrollToSection";
import { ROUTES } from "../../../constants/routes";
import styles from "./Hero.module.css";
import AnimatedCounter from "../../common/AnimatedCounter/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger);

// Hero component for home page
const Hero = () => {
  const { t } = useTranslation();
  const scrollToSection = useScrollToSection();
  const containerRef = useRef(null);
  const scrollYProgress = useMotionValue(0);

  //GSAP pin animation
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "+=400vh",
        pin: true,
        pinSpacing: true,
        scrub: 1.2,
        onUpdate: (self) => {
          scrollYProgress.set(self.progress);
        },
      });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container) st.kill();
      });
    };
  }, [scrollYProgress]);

  // Framer motion scroll animations
  const outerScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const outerOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.25]);

  // Card size change on scroll
  const mediaWidth = useTransform(scrollYProgress, [0, 0.95], ["68%", "100%"]);
  const mediaHeight = useTransform(
    scrollYProgress,
    [0, 0.95],
    ["62vh", "100vh"],
  );
  const mediaBorderRadius = useTransform(
    scrollYProgress,
    [0, 0.88],
    ["22px", "0px"],
  );

  // Dark overlay opacity
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.95], [0.28, 0.82]);

  // Title fade out when scrolling
  const introOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.45], [0, -65]);

  // Scroll arrow fade out
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.18], [0.7, 0]);

  // Stats content fade in
  const revealOpacity = useTransform(scrollYProgress, [0.82, 1.0], [0, 1]);
  const revealY = useTransform(scrollYProgress, [0.82, 1.0], [80, 0]);

  // download section
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
    <section ref={containerRef} className={styles.heroScrollContainer}>
      <div className={styles.stickyFrame}>
        {/* Background photo */}
        <motion.div
          className={styles.outerBgWrapper}
          style={{ scale: outerScale, opacity: outerOpacity }}
        >
          <img
            src="/images/hero-outer-bg.webp"
            alt="EV Charging Network Ambient Background"
            className={styles.outerBgImage}
          />
          <div className={styles.outerOverlay} />
        </motion.div>

        {/* Expanding card */}
        <motion.div
          className={styles.mediaBox}
          style={{
            width: mediaWidth,
            height: mediaHeight,
            borderRadius: mediaBorderRadius,
          }}
        >
          <img
            src="/images/hero-bg.webp"
            alt="EV Charging Stations"
            className={styles.bgImage}
            fetchPriority="high"
            decoding="async"
            loading="eager"
            width="1920"
            height="1080"
          />

          {/* Dark gradient overlay */}
          <motion.div
            className={styles.overlay}
            style={{ opacity: overlayOpacity }}
          />

          {/* Stats and goals shown after scroll */}
          <motion.div
            className={styles.revealContent}
            style={{ opacity: revealOpacity, y: revealY }}
          >
            {/* Numbers section */}
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>
                  <AnimatedCounter target={600} duration={1200} suffix="+" />
                </span>
                <span className={styles.statLabel}>
                  {t("hero.chargingPoints")}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>
                  <AnimatedCounter
                    target={99.9}
                    duration={1400}
                    decimals={1}
                    suffix="%"
                  />
                </span>
                <span className={styles.statLabel}>
                  {t("hero.uptimeReliability")}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>
                  <AnimatedCounter target={160} duration={1200} suffix="kW" />
                </span>
                <span className={styles.statLabel}>
                  {t("hero.ultraFastCharging")}
                </span>
              </div>
            </div>

            {/* Sustainable goals cards */}
            <div className={styles.goalSection}>
              <h3 className={styles.goalSectionHeading}>
                {t("hero.globalGoalsHeading")}
              </h3>
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
            </div>

            {/* Download app button */}
            <div className={styles.ctaButtons}>
              <Link to={ROUTES.DOWNLOAD_APP}>
                <Button variant="secondary" size="large">
                  {t("hero.downloadMobileApp")}
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Title and subtitle text */}
        <motion.div
          className={styles.introContent}
          style={{ opacity: introOpacity, y: introY }}
        >
          <motion.h1
            className={styles.title}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {t("hero.title")}{" "}
            <span className={styles.highlight}>{t("hero.titleHighlight")}</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            {t("hero.subtitlePrefix")}{" "}
            <span className={styles.subtitleHighlight}>
              {t("hero.subtitleHighlight")}
              <svg
                className={styles.highlightSketch}
                viewBox="0 0 200 18"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 3,9 C 50,15 130,3 197,9 M 12,12 C 70,16 140,8 185,11"
                  fill="none"
                />
              </svg>
            </span>{" "}
            {t("hero.subtitleSuffix")}
          </motion.p>
        </motion.div>

        {/* Scroll down button */}
        <motion.div
          className={styles.scrollIndicator}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ opacity: indicatorOpacity }}
          role="button"
          tabIndex={0}
          onClick={handleDiscoverMore}
          onKeyDown={handleKeyDownDiscover}
        >
          <span>{t("hero.discoverMore")}</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
