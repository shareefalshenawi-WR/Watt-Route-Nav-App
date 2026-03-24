import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../constants/routes";
import { fadeInUp, stagger } from "../../utils/animations";
import styles from "./PrivacyPolicyPage.module.css";

const EFFECTIVE_DATE = "March 21, 2026";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <div className={styles.container}>
          <motion.div
            className={styles.headerContent}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className={styles.breadcrumb}>
              <Link to={ROUTES.HOME} className={styles.breadcrumbLink}>
                {t("navbar.home")}
              </Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span>{t("footer.privacyPolicy")}</span>
            </div>
            <h1 className={styles.pageTitle}>
              {t("privacyPolicyPage.pageTitle")}{" "}
              <span className={styles.titleHighlight}>
                {t("privacyPolicyPage.pageTitleHighlight")}
              </span>
            </h1>
            <p className={styles.effectiveDate}>
              {t("privacyPolicyPage.effectiveDate")}{EFFECTIVE_DATE}
            </p>
            <p className={styles.pageDescription}>
              {t("privacyPolicyPage.pageDescription")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.contentLayout}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Sidebar TOC */}
            <aside className={styles.sidebar}>
              <div className={styles.tocCard}>
                <h3 className={styles.tocTitle}>
                  {t("privacyPolicyPage.tocTitle")}
                </h3>
                <nav className={styles.tocNav}>
                  {[
                    t("privacyPolicyPage.toc1"),
                    t("privacyPolicyPage.toc2"),
                    t("privacyPolicyPage.toc3"),
                    t("privacyPolicyPage.toc4"),
                    t("privacyPolicyPage.toc5"),
                    t("privacyPolicyPage.toc6"),
                    t("privacyPolicyPage.toc7"),
                    t("privacyPolicyPage.toc8"),
                    t("privacyPolicyPage.toc9"),
                  ].map((item, index) => {
                    // Extract href id from the English title for simplicity in linking, 
                    // or just use section numbers
                    const id = [
                      "information-we-collect",
                      "how-we-use",
                      "sharing",
                      "data-security",
                      "your-rights",
                      "cookies",
                      "children",
                      "changes",
                      "contact",
                    ][index];
                    return (
                      <a
                        key={index}
                        href={`#${id}`}
                        className={styles.tocLink}
                      >
                        {item}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <motion.main className={styles.content} variants={fadeInUp}>
              <div className={styles.noticeBanner}>
                <span className={styles.noticeIcon}>ℹ️</span>
                <p>
                  {t("privacyPolicyPage.noticeText")}
                  <a
                    href="mailto:info@wattrouteapp.com"
                    className={styles.inlineLink}
                  >
                    {t("privacyPolicyPage.contactUsLink")}
                  </a>
                  .
                </p>
              </div>

              {[
                {
                  id: "information-we-collect",
                  num: "01",
                  titleKey: "section1Title",
                  textKey: "section1Text",
                },
                {
                  id: "how-we-use",
                  num: "02",
                  titleKey: "section2Title",
                  textKey: "section2Text",
                },
                {
                  id: "sharing",
                  num: "03",
                  titleKey: "section3Title",
                  textKey: "section3Text",
                },
                {
                  id: "data-security",
                  num: "04",
                  titleKey: "section4Title",
                  textKey: "section4Text",
                },
                {
                  id: "your-rights",
                  num: "05",
                  titleKey: "section5Title",
                  textKey: "section5Text",
                },
                {
                  id: "cookies",
                  num: "06",
                  titleKey: "section6Title",
                  textKey: "section6Text",
                },
                {
                  id: "children",
                  num: "07",
                  titleKey: "section7Title",
                  textKey: "section7Text",
                },
                {
                  id: "changes",
                  num: "08",
                  titleKey: "section8Title",
                  textKey: "section8Text",
                },
              ].map((section) => (
                <section key={section.id} id={section.id} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>{section.num}</span>
                    {t(`privacyPolicyPage.${section.titleKey}`)}
                  </h2>
                  <p className={styles.placeholder}>
                    {t(`privacyPolicyPage.${section.textKey}`)}
                  </p>
                </section>
              ))}

              <section id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>09</span>
                  {t("privacyPolicyPage.section9Title")}
                </h2>
                <p className={styles.placeholder}>
                  {t("privacyPolicyPage.section9Text")}
                </p>
                <div className={styles.contactCard}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>
                      {t("privacyPolicyPage.emailLabel")}
                    </span>
                    <a
                      href="mailto:info@wattrouteapp.com"
                      className={styles.contactValue}
                    >
                      info@wattrouteapp.com
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>
                      {t("privacyPolicyPage.phoneLabel")}
                    </span>
                    <a href="tel:+201508275572" className={styles.contactValue}>
                      {/* Using base footer phone directly because format +20 150 827 5572 is fine in both lang, or fetch from locales */}
                      {t("footer.phone")}
                    </a>
                  </div>
                </div>
              </section>
            </motion.main>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
