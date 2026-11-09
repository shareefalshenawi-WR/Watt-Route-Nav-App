import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./Features.module.css";

// Minimalist, premium SVG icons matching brand identity
const IconCharging = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.cardIcon}
    aria-hidden="true"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconPayment = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.cardIcon}
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <line x1="7" y1="15" x2="7.01" y2="15" strokeWidth="2.5" />
    <line x1="11" y1="15" x2="13" y2="15" />
  </svg>
);

const IconRealTime = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.cardIcon}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M17 2l3 3-3 3" />
    <path d="M20 5h-4" />
  </svg>
);

const IconSupport = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.cardIcon}
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const IconReliable = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.cardIcon}
    aria-hidden="true"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconMobileApp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.cardIcon}
    aria-hidden="true"
  >
    <rect x="5" y="2" width="14" height="20" rx="3" />
    <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
  </svg>
);

const IconPackage = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.packageIcon}
    aria-hidden="true"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

// Map card IDs to icon components
const iconMap = {
  "smart-charging": IconCharging,
  "unified-payment": IconPayment,
  "real-time-status": IconRealTime,
  "support-24": IconSupport,
  "reliable": IconReliable,
  "mobile-app": IconMobileApp,
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const visualVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Features = () => {
  const { t } = useTranslation();

  const cards = t("features.cards", { returnObjects: true }) || [];
  const whatsIncludedItems = t("features.whatsIncluded.items", { returnObjects: true }) || [];

  return (
    <section className={styles.section} id="features" aria-label={t("features.title", "Technical Specifications")}>
      <div className={styles.container}>
        <motion.div
          className={styles.layoutGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/*  LEFT COLUMN  */}
          <motion.div className={styles.leftColumn} variants={visualVariants}>
            {/*  Product Visual  */}
            <div className={styles.visualContainer}>
              <img
                src="/images/domev-smart-charger.png"
                alt={t("features.visualAlt", "DOMEv Smart EV Charging Station Hardware")}
                className={styles.hardwareImage}
                loading="lazy"
                decoding="async"
                width="640"
                height="640"
              />
            </div>

            {/* "What's Included" Information Card */}
            <div className={styles.includedCard}>
              <div className={styles.includedHeader}>
                <IconPackage />
                <h3 className={styles.includedTitle}>
                  {t("features.whatsIncluded.title", "What's Included")}
                </h3>
              </div>

              <ul className={styles.includedList}>
                {Array.isArray(whatsIncludedItems) &&
                  whatsIncludedItems.map((item, index) => (
                    <li key={index} className={styles.includedItem}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </motion.div>

          {/*  RIGHT COLUMN  */}
          <div className={styles.rightColumn}>
            {/* Prominent Section Heading */}
            <motion.h2 className={styles.heading} variants={fadeUp}>
              {t("features.title", "Technical Specifications")}
            </motion.h2>

            {/* Two-Column Specification Cards Grid */}
            <motion.div className={styles.cardsGrid} variants={containerVariants}>
              {Array.isArray(cards) &&
                cards.map((card, index) => {
                  const IconComponent = iconMap[card.id] || IconCharging;
                  return (
                    <motion.div
                      key={card.id || index}
                      className={styles.featureCard}
                      variants={fadeUp}
                    >
                     
                      <img
                        src={card.bgImage}
                        alt=""
                        aria-hidden="true"
                        className={styles.cardBgImage}
                        loading={index < 2 ? "eager" : "lazy"}
                        decoding="async"
                        width="600"
                        height="400"
                      />

                      {/* Semi-translucent */}
                      <div className={styles.cardOverlay} />

                      {/* Card Content */}
                      <div className={styles.cardContent}>
                        <div className={styles.cardHeaderRow}>
                          <div className={styles.cardIconWrapper}>
                            <IconComponent />
                          </div>
                          <h4 className={styles.cardTitle}>{card.title}</h4>
                        </div>
                        <p className={styles.cardDesc}>{card.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
