import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES } from "../../constants/routes";
import { fadeInUp, stagger } from "../../utils/animations";
import styles from "./TermsAndConditionsPage.module.css";

const EFFECTIVE_DATE = "March 21, 2026";

const TermsAndConditionsPage = () => {
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
              <span>{t("footer.termsOfService")}</span>
            </div>
            <h1 className={styles.pageTitle}>
              {t("termsAndConditionsPage.pageTitle")}{" "}
              <span className={styles.titleHighlight}>
                {t("termsAndConditionsPage.pageTitleHighlight")}
              </span>
            </h1>
            <p className={styles.effectiveDate}>
              {t("termsAndConditionsPage.effectiveDate")}{EFFECTIVE_DATE}
            </p>
            <p className={styles.pageDescription}>
              {t("termsAndConditionsPage.pageDescription")}
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
                  {t("termsAndConditionsPage.tocTitle")}
                </h3>
                <nav className={styles.tocNav}>
                  {[
                    t("termsAndConditionsPage.toc1"),
                    t("termsAndConditionsPage.toc2"),
                    t("termsAndConditionsPage.toc3"),
                    t("termsAndConditionsPage.toc4"),
                    t("termsAndConditionsPage.toc5"),
                    t("termsAndConditionsPage.toc6"),
                    t("termsAndConditionsPage.toc7"),
                    t("termsAndConditionsPage.toc8"),
                    t("termsAndConditionsPage.toc9"),
                    t("termsAndConditionsPage.toc10"),
                    t("termsAndConditionsPage.toc11"),
                  ].map((item, index) => {
                    const id = [
                      "acceptance",
                      "use-of-service",
                      "account",
                      "payments",
                      "intellectual-property",
                      "prohibited",
                      "liability",
                      "termination",
                      "governing-law",
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
                  {t("termsAndConditionsPage.noticeText")}
                  <a
                    href="mailto:info@wattrouteapp.com"
                    className={styles.inlineLink}
                  >
                    {t("termsAndConditionsPage.contactUsLink")}
                  </a>
                  .
                </p>
              </div>

              {[
                {
                  id: "acceptance",
                  num: "01",
                  titleKey: "section1Title",
                  textKey: "section1Text",
                },
                {
                  id: "use-of-service",
                  num: "02",
                  titleKey: "section2Title",
                  textKey: "section2Text",
                },
                {
                  id: "account",
                  num: "03",
                  titleKey: "section3Title",
                  textKey: "section3Text",
                },
                {
                  id: "payments",
                  num: "04",
                  titleKey: "section4Title",
                  textKey: "section4Text",
                },
                {
                  id: "intellectual-property",
                  num: "05",
                  titleKey: "section5Title",
                  textKey: "section5Text",
                },
                {
                  id: "prohibited",
                  num: "06",
                  titleKey: "section6Title",
                  textKey: "section6Text",
                },
                {
                  id: "liability",
                  num: "07",
                  titleKey: "section7Title",
                  textKey: "section7Text",
                },
                {
                  id: "termination",
                  num: "08",
                  titleKey: "section8Title",
                  textKey: "section8Text",
                },
                {
                  id: "governing-law",
                  num: "09",
                  titleKey: "section9Title",
                  textKey: "section9Text",
                },
                {
                  id: "changes",
                  num: "10",
                  titleKey: "section10Title",
                  textKey: "section10Text",
                },
              ].map((section) => (
                <section key={section.id} id={section.id} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>{section.num}</span>
                    {t(`termsAndConditionsPage.${section.titleKey}`)}
                  </h2>
                  <p className={styles.placeholder}>
                    {t(`termsAndConditionsPage.${section.textKey}`)}
                  </p>
                </section>
              ))}

              <section id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>11</span>
                  {t("termsAndConditionsPage.section11Title")}
                </h2>
                <p className={styles.placeholder}>
                  {t("termsAndConditionsPage.section11Text")}
                </p>
                <div className={styles.contactCard}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>
                      {t("termsAndConditionsPage.emailLabel")}
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
                      {t("termsAndConditionsPage.phoneLabel")}
                    </span>
                    <a href="tel:+201508275572" className={styles.contactValue}>
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

export default TermsAndConditionsPage;
