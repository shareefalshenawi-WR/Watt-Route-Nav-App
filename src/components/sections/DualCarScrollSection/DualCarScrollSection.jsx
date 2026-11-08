import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUAL_CAR_ASSETS, MOTION_CONFIG } from "./constants";
import { ROUTES } from "../../../constants/routes";
import styles from "./DualCarScrollSection.module.css";

gsap.registerPlugin(ScrollTrigger);

/* DualCarScrollSection*/
const DualCarScrollSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);

  // Vehicle refs
  const car1Ref = useRef(null);
  const car2Ref = useRef(null);

  // SVG tire track refs
  const track1LeftRef = useRef(null);
  const track1RightRef = useRef(null);
  const track2LeftRef = useRef(null);
  const track2RightRef = useRef(null);

  // Typography phase refs
  const phase1Ref = useRef(null);
  const phase2Ref = useRef(null);
  const phase3Ref = useRef(null);
  const watermarkRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const car1 = car1Ref.current;
    const car2 = car2Ref.current;

    if (!section || !viewport || !car1 || !car2) return;

    
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Configure SVG tire tracks dash properties
      const tracks = [
        track1LeftRef.current,
        track1RightRef.current,
        track2LeftRef.current,
        track2RightRef.current,
      ].filter(Boolean);

      tracks.forEach((track) => {
        try {
          const length = track.getTotalLength();
          gsap.set(track, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        } catch {
          gsap.set(track, {
            strokeDasharray: 1400,
            strokeDashoffset: 1400,
          });
        }
      });

      // Desktop & Tablet Setup (>= 769px)
      mm.add("(min-width: 769px)", () => {
        gsap.set(phase1Ref.current, { opacity: 1, y: 0, scale: 1 });
        gsap.set(phase2Ref.current, { opacity: 0, y: 35, scale: 0.96 });
        gsap.set(phase3Ref.current, { opacity: 0, y: 35, scale: 0.96 });

        // Initial setup for cars
        gsap.set(car1, {
          y: "-115vh",
          x: "0vw",
          rotation: 180,
          force3D: true,
        });

        gsap.set(car2, {
          y: "115vh",
          x: "0vw",
          rotation: 0,
          force3D: true,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: MOTION_CONFIG.desktopScrollDuration,
            pin: true,
            pinSpacing: true,
            scrub: MOTION_CONFIG.scrubSpeed,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1. CAR 1
        tl.to(
          car1,
          {
            y: "115vh",
            ease: "power1.inOut",
            duration: 1,
          },
          0
        );

        
        tl.to(
          car1,
          {
            x: "-2.2vw",
            rotation: 182.5,
            ease: "sine.inOut",
            duration: 0.5,
          },
          0
        ).to(
          car1,
          {
            x: "0vw",
            rotation: 180,
            ease: "sine.inOut",
            duration: 0.5,
          },
          0.5
        );

        // 2. CAR 2 
        tl.to(
          car2,
          {
            y: "-115vh",
            ease: "power1.inOut",
            duration: 1,
          },
          0
        );

        tl.to(
          car2,
          {
            x: "2.2vw",
            rotation: -2.5,
            ease: "sine.inOut",
            duration: 0.5,
          },
          0
        ).to(
          car2,
          {
            x: "0vw",
            rotation: 0,
            ease: "sine.inOut",
            duration: 0.5,
          },
          0.5
        );

        // 3. TIRE TRACKS REVEAL 
        const car1Tracks = [track1LeftRef.current, track1RightRef.current].filter(Boolean);
        const car2Tracks = [track2LeftRef.current, track2RightRef.current].filter(Boolean);

        if (car1Tracks.length > 0) {
          tl.to(
            car1Tracks,
            {
              strokeDashoffset: 0,
              ease: "power1.inOut",
              duration: 1,
            },
            0
          );
        }

        if (car2Tracks.length > 0) {
          tl.to(
            car2Tracks,
            {
              strokeDashoffset: 0,
              ease: "power1.inOut",
              duration: 1,
            },
            0
          );
        }

        // 4. ARCHITECTURAL WATERMARK subtle parallax
        if (watermarkRef.current) {
          tl.to(
            watermarkRef.current,
            {
              y: "-12vh",
              ease: "none",
              duration: 1,
            },
            0
          );
        }

        // 5. STORYTELLING TYPOGRAPHY PHASES
        // Phase 1 -> Phase 2 transition (around 0.28 - 0.42)
        tl.to(
          phase1Ref.current,
          {
            opacity: 0,
            y: -35,
            scale: 0.96,
            duration: 0.16,
            ease: "power2.inOut",
          },
          0.26
        );

        tl.to(
          phase2Ref.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.18,
            ease: "power2.out",
          },
          0.38
        );

        // Phase 2 -> Phase 3 transition (around 0.58 - 0.72)
        tl.to(
          phase2Ref.current,
          {
            opacity: 0,
            y: -35,
            scale: 0.96,
            duration: 0.16,
            ease: "power2.inOut",
          },
          0.6
        );

        tl.to(
          phase3Ref.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.18,
            ease: "power2.out",
          },
          0.7
        );

        // Gentle release fade at end of pinning (0.94 - 1.0)
        tl.to(
          phase3Ref.current,
          {
            opacity: 0.92,
            duration: 0.06,
          },
          0.94
        );
      });

      // Mobile Setup (<= 768px)
      mm.add("(max-width: 768px)", () => {
        gsap.set(phase1Ref.current, { opacity: 1, y: 0, scale: 1 });
        gsap.set(phase2Ref.current, { opacity: 0, y: 25, scale: 0.97 });
        gsap.set(phase3Ref.current, { opacity: 0, y: 25, scale: 0.97 });

        gsap.set(car1, {
          y: "-110vh",
          x: "0vw",
          rotation: 180,
          force3D: true,
        });

        gsap.set(car2, {
          y: "110vh",
          x: "0vw",
          rotation: 0,
          force3D: true,
        });

        const mobileTl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: MOTION_CONFIG.mobileScrollDuration,
            pin: true,
            pinSpacing: true,
            scrub: MOTION_CONFIG.mobileScrubSpeed,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Car 1 mobile movement
        mobileTl.to(
          car1,
          {
            y: "110vh",
            ease: "power1.inOut",
            duration: 1,
          },
          0
        );

        // Car 2 mobile movement
        mobileTl.to(
          car2,
          {
            y: "-110vh",
            ease: "power1.inOut",
            duration: 1,
          },
          0
        );

        // Mobile Tire Tracks
        const car1Tracks = [track1LeftRef.current, track1RightRef.current].filter(Boolean);
        const car2Tracks = [track2LeftRef.current, track2RightRef.current].filter(Boolean);

        if (car1Tracks.length > 0) {
          mobileTl.to(
            car1Tracks,
            { strokeDashoffset: 0, ease: "power1.inOut", duration: 1 },
            0
          );
        }

        if (car2Tracks.length > 0) {
          mobileTl.to(
            car2Tracks,
            { strokeDashoffset: 0, ease: "power1.inOut", duration: 1 },
            0
          );
        }

        // Mobile Storytelling Transitions
        mobileTl.to(
          phase1Ref.current,
          { opacity: 0, y: -25, duration: 0.16, ease: "power2.inOut" },
          0.26
        );

        mobileTl.to(
          phase2Ref.current,
          { opacity: 1, y: 0, duration: 0.18, ease: "power2.out" },
          0.38
        );

        mobileTl.to(
          phase2Ref.current,
          { opacity: 0, y: -25, duration: 0.16, ease: "power2.inOut" },
          0.6
        );

        mobileTl.to(
          phase3Ref.current,
          { opacity: 1, y: 0, duration: 0.18, ease: "power2.out" },
          0.7
        );
      });

      // Refresh ScrollTrigger after DOM setup
      ScrollTrigger.refresh();
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      id="dual-car-scroll"
      aria-label="Watt Route Dual Car Scroll Animation"
    >
      <div ref={viewportRef} className={styles.viewport}>
        {/* Roadway Markings & Architectural Watermark */}
        <div className={styles.roadEnvironment}>
          <div className={styles.roadGrid} />
          <div className={styles.centerDivider} />
          <div className={styles.laneBorderLeft} />
          <div className={styles.laneBorderRight} />

          <div className={styles.telemetryMarkerLeft}>
            WATT ROUTE // CORRIDOR 01 • SOUTHBOUND
          </div>
          <div className={styles.telemetryMarkerRight}>
            DOMEV HIGHWAY // 160KW FASTGRID • NORTHBOUND
          </div>

          <div ref={watermarkRef} className={styles.watermark}>
            {t("dualCarAnimation.watermark")}
          </div>
        </div>

        {/* SVG Animated Tire Tracks Layer (Opposing Progressive Draw) */}
        <svg
          className={styles.tracksSvg}
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="trackEnergyGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e4552" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#569166" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#6ab87a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#7bbfd4" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="trackEnergyCyan" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1e4552" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#7bbfd4" stopOpacity="0.75" />
              <stop offset="85%" stopColor="#569166" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#68a878" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          <g className={styles.trackGroupLeft}>
            <path
              d="M 266,-150 C 266,220 244,480 244,500 C 244,520 266,780 266,1150"
              className={styles.tireTrackRubber}
            />
            <path
              d="M 294,-150 C 294,220 272,480 272,500 C 272,520 294,780 294,1150"
              className={styles.tireTrackRubber}
            />
            <path
              ref={track1LeftRef}
              d="M 266,-150 C 266,220 244,480 244,500 C 244,520 266,780 266,1150"
              className={styles.tireTrackEnergy}
            />
            <path
              ref={track1RightRef}
              d="M 294,-150 C 294,220 272,480 272,500 C 272,520 294,780 294,1150"
              className={styles.tireTrackEnergy}
            />
          </g>

          <g className={styles.trackGroupRight}>
            <path
              d="M 706,1150 C 706,780 728,520 728,500 C 728,480 706,220 706,-150"
              className={styles.tireTrackRubber}
            />
            <path
              d="M 734,1150 C 734,780 756,520 756,500 C 756,480 734,220 734,-150"
              className={styles.tireTrackRubber}
            />
            <path
              ref={track2LeftRef}
              d="M 706,1150 C 706,780 728,520 728,500 C 728,480 706,220 706,-150"
              className={styles.tireTrackEnergySecondary}
            />
            <path
              ref={track2RightRef}
              d="M 734,1150 C 734,780 756,520 756,500 C 756,480 734,220 734,-150"
              className={styles.tireTrackEnergySecondary}
            />
          </g>
        </svg>

        {/* Vehicles Layer (High-End Opposing Electric Vehicles) */}
        <div className={styles.vehiclesLayer}>
          {/* VEHICLE 1:  */}
          <div ref={car1Ref} className={styles.car1Wrapper}>
           
            <div className={styles.headlightDown} />

            {/* Realistic Ground Ambient Occlusion Shadow */}
            <div className={styles.contactShadow} />

            {/* Vehicle 1 Top-down Image */}
            <img
              src={DUAL_CAR_ASSETS.car1}
              alt={t("dualCarAnimation.badgeCar1")}
              className={styles.vehicleImage}
              width="240"
              height="490"
              loading="eager"
              decoding="async"
            />

            {/* Rear Taillight LED Bar */}
            <div className={styles.taillightStripTop} />

            {/* Live Telemetry Tag */}
            <div className={`${styles.carTelemetryTag} ${styles.carTelemetryLeft}`}>
              <span className={styles.hudStatusPulse} />
              <span>{t("dualCarAnimation.badgeCar1")}</span>
            </div>
          </div>

          {/* VEHICLE 2: Luxury Electric SUV (Northbound, moving upward) */}
          <div ref={car2Ref} className={styles.car2Wrapper}>
            {/* Headlight illumination beam projecting upward onto asphalt */}
            <div className={styles.headlightUp} />

            {/* Realistic Ground Ambient Occlusion Shadow */}
            <div className={styles.contactShadow} />

            {/* Vehicle 2 Top-down Image */}
            <img
              src={DUAL_CAR_ASSETS.car2}
              alt={t("dualCarAnimation.badgeCar2")}
              className={styles.vehicleImage}
              width="240"
              height="490"
              loading="eager"
              decoding="async"
            />

            {/* Rear Taillight LED Bar */}
            <div className={styles.taillightStripBottom} />

            {/* Live Telemetry Tag */}
            <div className={`${styles.carTelemetryTag} ${styles.carTelemetryRight}`}>
              <span className={styles.hudStatusPulse} />
              <span>{t("dualCarAnimation.badgeCar2")}</span>
            </div>
          </div>
        </div>

        {/*  Center Stage: Layered Automotive Storytelling Typography */}
        <div className={styles.storyStage}>
          {/* Phase 1: Connected Mobility (Initial scroll) */}
          <div ref={phase1Ref} className={styles.storyCard}>
            <div className={styles.eyebrowBadge}>
              <svg
                className={styles.eyebrowIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
              </svg>
              {t("dualCarAnimation.phase1.badge")}
            </div>
            <h2 className={styles.storyHeading}>
              {t("dualCarAnimation.phase1.title")}
            </h2>
            <p className={styles.storyDescription}>
              {t("dualCarAnimation.phase1.desc")}
            </p>
          </div>

          {/* Phase 2: Synchronized Power (Midpoint, as vehicles cross) */}
          <div ref={phase2Ref} className={styles.storyCard}>
            <div className={styles.eyebrowBadge}>
              <svg
                className={styles.eyebrowIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              {t("dualCarAnimation.phase2.badge")}
            </div>
            <h2 className={styles.storyHeading}>
              {t("dualCarAnimation.phase2.title")}
            </h2>
            <p className={styles.storyDescription}>
              {t("dualCarAnimation.phase2.desc")}
            </p>
          </div>

          {/* Phase 3: Final Composition & National Network Stats */}
          <div ref={phase3Ref} className={styles.storyCard}>
            <div className={styles.eyebrowBadge}>
              <svg
                className={styles.eyebrowIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              {t("dualCarAnimation.phase3.badge")}
            </div>
            <h2 className={styles.storyHeading}>
              {t("dualCarAnimation.phase3.title")}
            </h2>
            <p className={styles.storyDescription}>
              {t("dualCarAnimation.phase3.desc")}
            </p>

            {/* Live Network Telemetry Stats */}
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryStat}>
                <span className={styles.statValue}>
                  {t("dualCarAnimation.stats.stat1Number")}
                </span>
                <span className={styles.statLabel}>
                  {t("dualCarAnimation.stats.stat1Label")}
                </span>
              </div>
              <div className={styles.telemetryStat}>
                <span className={styles.statValue}>
                  {t("dualCarAnimation.stats.stat2Number")}
                </span>
                <span className={styles.statLabel}>
                  {t("dualCarAnimation.stats.stat2Label")}
                </span>
              </div>
              <div className={styles.telemetryStat}>
                <span className={styles.statValue}>
                  {t("dualCarAnimation.stats.stat3Number")}
                </span>
                <span className={styles.statLabel}>
                  {t("dualCarAnimation.stats.stat3Label")}
                </span>
              </div>
            </div>

            {/* Call to Action */}
            <div className={styles.ctaWrapper}>
              <Link to={ROUTES.DOWNLOAD_APP}>
                <button type="button" className={styles.ctaButton}>
                  <span>{t("dualCarAnimation.cta")}</span>
                  <svg
                    className={styles.ctaIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default DualCarScrollSection;

