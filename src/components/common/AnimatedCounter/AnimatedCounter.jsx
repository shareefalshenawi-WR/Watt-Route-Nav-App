import React, { useEffect, useRef, useState } from "react";
import styles from "./AnimatedCounter.module.css";

// cubic ease-out
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const AnimatedCounter = ({
  target = 0,
  duration = 1000,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
  startOn = 0.3,
}) => {
  const ref = useRef(null);
  const rafId = useRef(null);
  const startTime = useRef(null);
  const [display, setDisplay] = useState(() =>
    decimals ? (0).toFixed(decimals) : "0"
  );
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            !started.current &&
            entry.intersectionRatio >= startOn
          ) {
            started.current = true;
            startTime.current = null;
            // start animation
            const start = () => {
              const step = (timestamp) => {
                if (!startTime.current) startTime.current = timestamp;
                const elapsed = timestamp - startTime.current;
                const t = Math.min(1, elapsed / duration);
                const eased = easeOutCubic(t);
                const current = eased * target;

                if (decimals) {
                  setDisplay(current.toFixed(decimals));
                } else {
                  setDisplay(Math.round(current).toString());
                }

                if (t < 1) {
                  rafId.current = requestAnimationFrame(step);
                }
              };

              rafId.current = requestAnimationFrame(step);
            };

            start();
            // once started, we can unobserve
            observer.unobserve(node);
          }
        });
      },
      { threshold: startOn }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [target, duration, decimals, startOn]);

  return (
    <span
      ref={ref}
      className={`${styles.counter} ${className}`}
      aria-live="polite"
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
