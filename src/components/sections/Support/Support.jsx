/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../../common/Button/Button";
import Card from "../../common/Card/Card";
import { fadeInUp, stagger } from "../../../utils/animations";
import styles from "./Support.module.css";

const Support = () => {
  const { t } = useTranslation();
  const supportOptions = [
    {
      id: 1,
      icon: "📧",
      titleKey: "support.emailSupport",
      descKey: "support.emailSupportDesc",
      contact: "support@wattrouteapp.com",
      actionKey: "support.sendEmail",
      type: "email",
    },
    {
      id: 2,
      icon: "💬",
      titleKey: "support.whatsappSupport",
      descKey: "support.whatsappSupportDesc",
      contact: "+20 155 236 3927",
      actionKey: "support.startChat",
      type: "whatsapp",
    },
    {
      id: 3,
      icon: "📞",
      titleKey: "support.phoneSupport",
      descKey: "support.phoneSupportDesc",
      contact: "+20 155 236 3927",
      actionKey: "support.callNow",
      type: "phone",
    },
  ];

  const normalizePhone = (raw) => raw.replace(/[^0-9+]/g, "");

  const handleAction = (option) => {
    try {
      if (option.type === "email") {
        window.location.href = `mailto:${option.contact}`;
        return;
      }

      if (option.type === "whatsapp") {
        // Normalize phone to E.164 without + for wa.me
        const normalized = normalizePhone(option.contact).replace(/^\+/, "");
        const waLink = `https://wa.me/${normalized}`;
        window.open(waLink, "_blank", "noopener,noreferrer");
        return;
      }

      if (option.type === "phone") {
        const normalized = normalizePhone(option.contact);
        // Use tel: link to trigger phone call on supported devices
        window.location.href = `tel:${normalized}`;
        return;
      }
    } catch (err) {
      // fallback: copy contact to clipboard if available
      if (navigator.clipboard && option.contact) {
        navigator.clipboard.writeText(option.contact);
      }
    }
  };

  return (
    <>
      <section className={styles.section} id="support">
        <div className={styles.container}>
          {/* Header */}
          <motion.div
            className={styles.header}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.title}>{t("support.supportCenter")}</h2>
            <p className={styles.subtitle}>
              {t("support.supportCenterDescription")}
            </p>
          </motion.div>

          {/* Support Options */}
          <motion.div
            className={styles.supportGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {supportOptions.map((option) => (
              <motion.div key={option.id} variants={fadeInUp}>
                <Card className={styles.supportCard}>
                  <div className={styles.supportIcon}>{option.icon}</div>
                  <h3 className={styles.supportTitle}>{t(option.titleKey)}</h3>
                  <p className={styles.supportDescription}>
                    {t(option.descKey)}
                  </p>
                  <p className={styles.supportContact}>{option.contact}</p>
                  <Button
                    variant="outline"
                    className={styles.supportButton}
                    onClick={() => handleAction(option)}
                    aria-label={t(option.actionKey)}
                  >
                    {t(option.actionKey)}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          {/* <motion.div
            className={styles.ctaSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className={styles.ctaTitle}>Still have questions?</h3>
            <p className={styles.ctaText}>
              Our support team is ready to assist you
            </p>
            <Button variant="secondary" size="large">
              Contact Support
            </Button>
          </motion.div> */}
        </div>
      </section>
      
      {/* Support Visual Phases */}
      <section className={styles.phasesSection}>
        <div className={styles.container}>
          <motion.div 
            className={styles.phasesHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className={styles.title}>{t("Support Phases") || "How It Works"}</h2>
            <p className={styles.subtitle}>{t("Our seamless support process to get you back on track") || "Our seamless support process to get you back on track."}</p>
          </motion.div>

          <div className={styles.phasesGrid}>
            {[
              {
                step: "01",
                title: "Reach Out",
                desc: "Contact us via any channel that suits you.",
                icon: "👋"
              },
              {
                step: "02",
                title: "Expert Diagnosis",
                desc: "Our specialists analyze and identify the issue.",
                icon: "🔍"
              },
              {
                step: "03",
                title: "Fast Resolution",
                desc: "Get an effective solution and back on the road.",
                icon: "✅"
              }
            ].map((phase, index) => (
              <motion.div 
                key={index} 
                className={styles.phaseCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={styles.phaseStep}>{phase.step}</div>
                <div className={styles.phaseIcon}>{phase.icon}</div>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseDesc}>{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Support;
