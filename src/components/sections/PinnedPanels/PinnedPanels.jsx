import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PinnedPanels.module.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const sharedGradient =
  "linear-gradient(135deg, rgba(30, 69, 82, 0.88) 0%, rgba(30, 69, 82, 0.88) 35%, rgba(42, 94, 110, 0.88) 60%, rgba(54, 98, 98, 0.88) 85%, rgba(54, 98, 98, 0.88) 100%)";

const PinnedPanels = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const panelsRef = useRef([]);

  const panels = [
  {
    id: 1,
    titleKey: "pinnedPanels.panel1.title",
    descKey: "pinnedPanels.panel1.desc",
    backgroundImage: "/images/panels/panelone.png",
    gradient: sharedGradient,
    // icon: "🌱",
  },
  {
    id: 2,
    titleKey: "pinnedPanels.panel2.title",
    descKey: "pinnedPanels.panel2.desc",
    backgroundImage: "/images/panels/paneltwo.png",
    gradient: sharedGradient,
    // icon: "🌐",
  },
  {
    id: 3,
    titleKey: "pinnedPanels.panel3.title",
    descKey: "pinnedPanels.panel3.desc",
    backgroundImage: "/images/panels/panelthree.png",
    gradient: sharedGradient,
    // icon: "⚡",
  },
];


  useEffect(() => {
    const container = containerRef.current;
    const panelElements = panelsRef.current;

    if (!container || panelElements.length === 0) return;

    // Check if mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (!isMobile) {
      // Desktop: Pinned panels effect
      const totalPanels = panelElements.length;

      panelElements.forEach((panel, index) => {
        if (index < totalPanels - 1) {
          gsap.to(panel, {
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: () => `+=${window.innerHeight}`,
              pin: true,
              pinSpacing: false,
              scrub: 1,
              anticipatePin: 1,
            },
            scale: 0.9,
            opacity: 0.5,
            ease: "none",
          });
        }
      });

      // Add overscroll effect to the last panel
      const lastPanel = panelElements[totalPanels - 1];
      ScrollTrigger.create({
        trigger: lastPanel,
        start: "top top",
        end: () => `+=${window.innerHeight * 0.5}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
      });
    } else {
      // Mobile: Simple fade-in animations
      panelElements.forEach((panel) => {
        gsap.fromTo(
          panel,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: panel,
              start: "top 80%",
              end: "top 20%",
              scrub: 1,
            },
          }
        );
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      {panels.map((panel, index) => (
        <div
          key={panel.id}
          ref={(el) => (panelsRef.current[index] = el)}
          className={styles.panel}
          style={{
            backgroundImage: `url(${panel.backgroundImage})`,
          }}
        >
          {/* Overlay gradient for better text readability */}
          <div className={styles.overlay} style={{ background: panel.gradient }}></div>
          
          <div className={styles.panelContent}>
            <div className={styles.icon}>{panel.icon}</div>
            <h2 className={styles.title}>{t(panel.titleKey)}</h2>
            <p className={styles.description}>{t(panel.descKey)}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PinnedPanels;
