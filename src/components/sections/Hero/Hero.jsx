import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ROUTES } from "../../../constants/routes";
import styles from "./Hero.module.css";

const DownloadIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Hero = () => {
  const { t } = useTranslation();

  // Animation refs
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRowRef = useRef(null);
  const trustFooterRef = useRef(null);
  const vehicleStageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      const leftElements = [
        badgeRef.current,
        title1Ref.current,
        title2Ref.current,
        subheadlineRef.current,
        ctaRowRef.current,
        trustFooterRef.current,
      ].filter(Boolean);

      tl.from(
        leftElements,
        { opacity: 0, y: 28, duration: 0.65, stagger: 0.08 }
      );

      // EV vehicle glides in from right
      if (vehicleStageRef.current) {
        tl.from(
          vehicleStageRef.current,
          {
            opacity: 0,
            x: 50,
            scale: 0.95,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.heroSection}
      aria-label="Hero Section"
    >
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.subtleGrid} aria-hidden="true" />

      {/* Hero Body: Two-Column Composition */}
      <div className={styles.heroBody}>
        {/* Left Column: Editorial Content */}
        <div className={styles.heroLeft}>
          {/* Eyebrow Status Badge */}
          <div ref={badgeRef} className={styles.statusBadge}>
            <span>{t("products.badge")}</span>
          </div>

          {/* Large Bold Headline */}
          <h1 className={styles.headline}>
            <span ref={title1Ref} className={styles.headlineLine1}>
              {t("hero.redesignHeadline1")}
            </span>
            <span ref={title2Ref} className={styles.headlineLine2}>
              {t("hero.redesignHeadline2")}
            </span>
          </h1>

          {/* Supporting Paragraph */}
          <p ref={subheadlineRef} className={styles.subheadline}>
            {t("hero.redesignSubtext")}
          </p>

          {/* Action Buttons Row */}
          <div ref={ctaRowRef} className={styles.ctaRow}>
            {/* Primary: Explore DOMEv */}
            <Link to={ROUTES.DOMEV} className={styles.primaryCta}>
              <span>{t("hero.exploreDomev")}</span>
              
            </Link>

            {/* Secondary: Download App */}
            <Link to={ROUTES.DOWNLOAD_APP} className={styles.secondaryCta}>
              <DownloadIcon />
              <span>{t("navbar.downloadApp")}</span>
            </Link>
          </div>

          {/* Global Goals Trust Marks */}
          <div ref={trustFooterRef} className={styles.trustFooter}>
            <span className={styles.trustLabel}>
              {t("hero.globalGoalsHeading")}
            </span>
            <div className={styles.trustLogos}>
              <div className={styles.trustItem}>
                <img
                  src="/images/Global Goals/Egypt Vision 2030.png"
                  alt="Egypt Vision 2030"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
                <span>Egypt Vision 2030</span>
              </div>
              <div className={styles.trustItem}>
                <img
                  src="/images/Global Goals/Goal-07.png"
                  alt="UN SDG 7"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
                <span>UN SDG 7</span>
              </div>
              <div className={styles.trustItem}>
                <img
                  src="/images/Global Goals/SDG 13.png"
                  alt="UN SDG 13"
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                />
                <span>UN SDG 13</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: EV Vehicle Visual */}
        <div className={styles.heroRight}>
          <div className={styles.vehicleBackdropGlow} aria-hidden="true" />
          <div ref={vehicleStageRef} className={styles.vehicleStage}>
            <div className={styles.vehicleGroundShadow} aria-hidden="true" />
            <img
              src="/images/hero-ev-vehicle.webp"
              alt="Watt Route Luxury Electric Sports Sedan"
              className={styles.evImage}
              width="820"
              height="460"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
