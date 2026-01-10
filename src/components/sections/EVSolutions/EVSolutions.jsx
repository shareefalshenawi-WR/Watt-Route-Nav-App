import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { fadeInUp, stagger } from "../../../utils/animations";
import styles from "./EVSolutions.module.css";

// SVG Icon Components
const ChargingIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.iconSvg}
  >
    <polygon
      vectorEffect="non-scaling-stroke"
      points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    ></polygon>
  </svg>
);

const PaymentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.iconSvg}
  >
    <rect
      vectorEffect="non-scaling-stroke"
      x="1"
      y="4"
      width="22"
      height="16"
      rx="2"
      ry="2"
    ></rect>
    <line
      vectorEffect="non-scaling-stroke"
      x1="1"
      y1="10"
      x2="23"
      y2="10"
    ></line>
    <line vectorEffect="non-scaling-stroke" x1="7" y1="4" x2="7" y2="10"></line>
  </svg>
);

const RealTimeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.iconSvg}
  >
    <circle vectorEffect="non-scaling-stroke" cx="12" cy="12" r="10"></circle>
    <polyline
      vectorEffect="non-scaling-stroke"
      points="12 6 12 12 16 14"
    ></polyline>
    <path vectorEffect="non-scaling-stroke" d="M17 1l4 4-4 4"></path>
    <path vectorEffect="non-scaling-stroke" d="M21 5H12"></path>
    <path vectorEffect="non-scaling-stroke" d="M7 23l-4-4 4-4"></path>
    <path vectorEffect="non-scaling-stroke" d="M3 19h9"></path>
  </svg>
);

const SupportIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.iconSvg}
  >
    <path
      vectorEffect="non-scaling-stroke"
      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    ></path>
    <circle vectorEffect="non-scaling-stroke" cx="9" cy="7" r="4"></circle>
    <path
      vectorEffect="non-scaling-stroke"
      d="M23 21v-2a4 4 0 0 0-3-3.87"
    ></path>
    <path
      vectorEffect="non-scaling-stroke"
      d="M16 3.13a4 4 0 0 1 0 7.75"
    ></path>
  </svg>
);

const SecurityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.iconSvg}
  >
    <path
      vectorEffect="non-scaling-stroke"
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    ></path>
  </svg>
);

const MobileAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.iconSvg}
  >
    <rect
      vectorEffect="non-scaling-stroke"
      x="5"
      y="2"
      width="14"
      height="20"
      rx="2"
      ry="2"
    ></rect>
    <line
      vectorEffect="non-scaling-stroke"
      x1="12"
      y1="18"
      x2="12.01"
      y2="18"
    ></line>
  </svg>
);

const EVSolutions = () => {
  const { t } = useTranslation();

  // Smooth title animation variants
  const titleAnimation = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smooth easing
      }
    }
  };


  const solutions = [
    {
      id: 1,
      icon: ChargingIcon,
      titleKey: "evSolutions.smartCharging",
      descKey: "evSolutions.smartChargingDesc",
    },
    {
      id: 2,
      icon: PaymentIcon,
      titleKey: "evSolutions.unifiedPayment",
      descKey: "evSolutions.unifiedPaymentDesc",
    },
    {
      id: 3,
      icon: RealTimeIcon,
      titleKey: "evSolutions.realTimeStatus",
      descKey: "evSolutions.realTimeStatusDesc",
    },
    {
      id: 4,
      icon: SupportIcon,
      titleKey: "evSolutions.support24",
      descKey: "evSolutions.support24Desc",
    },
    {
      id: 5,
      icon: SecurityIcon,
      titleKey: "evSolutions.reliable",
      descKey: "evSolutions.reliableDesc",
    },
    {
      id: 6,
      icon: MobileAppIcon,
      titleKey: "evSolutions.mobileApp",
      descKey: "evSolutions.mobileAppDesc",
    },
  ];



  return (
    <section className={styles.section} id="ev-solutions">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.h2 
            className={styles.title}
            variants={titleAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {t("evSolutions.title")}
          </motion.h2>
          <p className={styles.subtitle}>{t("evSolutions.subtitle")}</p>
        </motion.div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div key={solution.id} variants={fadeInUp} className={styles.cardWrapper}>
                <div className={styles.card}>
                  {/* Icon */}
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconContainer}>
                      <IconComponent />
                    </div>
                  </div>

                  <h3 className={styles.cardTitle}>{t(solution.titleKey)}</h3>
                  <p className={styles.cardDescription}>
                    {t(solution.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EVSolutions;
