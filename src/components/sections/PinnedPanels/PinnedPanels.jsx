import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PinnedPanels.module.css";

gsap.registerPlugin(ScrollTrigger);

const sharedGradient =
  "linear-gradient(135deg, rgba(30, 69, 82, 0.82) 0%, rgba(30, 69, 82, 0.82) 35%, rgba(42, 94, 110, 0.82) 60%, rgba(54, 98, 98, 0.82) 85%, rgba(54, 98, 98, 0.82) 100%)";

// Pinned panels component for feature slides
const PinnedPanels = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const panelsRef = useRef([]);
  const contentRefs = useRef([]);

  // 4 panels
  const panels = [
    {
      id: 1,
      titleKey: "pinnedPanels.panel1.title",
      descKey: "pinnedPanels.panel1.desc",
      backgroundImage: "/images/panels/panelfour.webp",
    },
    {
      id: 2,
      titleKey: "pinnedPanels.panel2.title",
      descKey: "pinnedPanels.panel2.desc",
      backgroundImage: "/images/panels/panelone.webp",
    },
    {
      id: 3,
      titleKey: "pinnedPanels.panel3.title",
      descKey: "pinnedPanels.panel3.desc",
      backgroundImage: "/images/panels/paneltwo.webp",
    },
    {
      id: 4,
      titleKey: "pinnedPanels.panel4.title",
      descKey: "pinnedPanels.panel4.desc",
      backgroundImage: "/images/panels/panelthree.webp",
    },
  ];

  useLayoutEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    const panelEls = panelsRef.current.filter(Boolean);
    const contentEls = contentRefs.current.filter(Boolean);

    if (!container || !track || panelEls.length === 0) return;

    const totalPanels = panelEls.length;

    // desktop and mobile scroll handling
    const mm = gsap.matchMedia();

    // Desktop horizontal scroll setup
    mm.add("(min-width: 769px)", () => {
      gsap.set(track, { clearProps: "all" });
      panelEls.forEach((p) => gsap.set(p, { clearProps: "all" }));

      if (contentEls[0]) gsap.set(contentEls[0], { opacity: 1, y: 0 });
      contentEls.slice(1).forEach((el) => gsap.set(el, { opacity: 0, y: 50 }));

      // GSAP horizontal slide animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate(self) {
            const activeIndex = Math.round(self.progress * (totalPanels - 1));
            contentEls.forEach((el, i) => {
              const isActive = i === activeIndex;
              const alreadySet = el.dataset.active === String(isActive);
              if (!alreadySet) {
                gsap.to(el, {
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 0 : i < activeIndex ? -50 : 50,
                  duration: 0.45,
                  ease: isActive ? "power2.out" : "power2.in",
                  overwrite: "auto",
                });
                el.dataset.active = String(isActive);
              }
            });
          },
        },
      });

      // Move track horizontally left
      tl.to(track, {
        xPercent: -((totalPanels - 1) * 100),
        ease: "none",
      });

      return () => {
        tl.kill();
        gsap.set(track, { clearProps: "xPercent" });
        contentEls.forEach((el) => {
          gsap.set(el, { clearProps: "opacity,y" });
          delete el.dataset.active;
        });
      };
    });

    // Mobile vertical scroll animation
    mm.add("(max-width: 768px)", () => {
      gsap.set(track, { clearProps: "xPercent,transform" });

      contentEls.forEach((el) => {
        gsap.set(el, { opacity: 1, y: 0 });
      });

      // Fade up panels one by one on scroll
      panelEls.forEach((panel) => {
        gsap.fromTo(
          panel,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 88%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      return () => {
        panelEls.forEach((p) => gsap.set(p, { clearProps: "opacity,y" }));
      };
    });

    ScrollTrigger.refresh();

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section className={styles.section} ref={containerRef}>
      <div className={styles.track} ref={trackRef}>
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            ref={(el) => (panelsRef.current[index] = el)}
            className={styles.panel}
          >
            {/* Panel background image */}
            <img
              src={panel.backgroundImage}
              alt=""
              aria-hidden="true"
              className={styles.panelBgImage}
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "low"}
              decoding={index === 0 ? "sync" : "async"}
              width="1920"
              height="1080"
            />

            {/* Gradient overlay */}
            <div
              className={styles.overlay}
              style={{ background: sharedGradient }}
            />

            {/* Panel text content */}
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className={styles.panelContent}
            >
              <h2 className={styles.title}>{t(panel.titleKey)}</h2>
              <p className={styles.description}>{t(panel.descKey)}</p>

              {/* Slide dots at bottom */}
              <div className={styles.progressDots}>
                {panels.map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`${styles.dot} ${
                      dotIndex === index ? styles.dotActive : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PinnedPanels;
