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
            <p 
              className={styles.pageDescription}
              dangerouslySetInnerHTML={{ __html: t("privacyPolicyPage.pageDescription") }}
            />
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
                    t("privacyPolicyPage.toc10"),
                    t("privacyPolicyPage.toc11"),
                  ].map((item, index) => {
                    const id = [
                      "information-collect",
                      "how-we-use",
                      "sharing-information",
                      "data-retention",
                      "data-security",
                      "your-rights",
                      "childrens-privacy",
                      "third-party-links",
                      "changes-policy",
                      "governing-law",
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
              {[
                {
                  id: "information-collect",
                  num: "1",
                  titleKey: "section1Title",
                  textKey: "section1Text",
                },
                {
                  id: "how-we-use",
                  num: "2",
                  titleKey: "section2Title",
                  textKey: "section2Text",
                },
                {
                  id: "sharing-information",
                  num: "3",
                  titleKey: "section3Title",
                  textKey: "section3Text",
                },
                {
                  id: "data-retention",
                  num: "4",
                  titleKey: "section4Title",
                  textKey: "section4Text",
                },
                {
                  id: "data-security",
                  num: "5",
                  titleKey: "section5Title",
                  textKey: "section5Text",
                },
                {
                  id: "your-rights",
                  num: "6",
                  titleKey: "section6Title",
                  textKey: "section6Text",
                },
                {
                  id: "childrens-privacy",
                  num: "7",
                  titleKey: "section7Title",
                  textKey: "section7Text",
                },
                {
                  id: "third-party-links",
                  num: "8",
                  titleKey: "section8Title",
                  textKey: "section8Text",
                },
                {
                  id: "changes-policy",
                  num: "9",
                  titleKey: "section9Title",
                  textKey: "section9Text",
                },
                {
                  id: "governing-law",
                  num: "10",
                  titleKey: "section10Title",
                  textKey: "section10Text",
                },
              ].map((section) => (
                <section key={section.id} id={section.id} className={styles.section}>
                  <h2 className={styles.sectionTitle}>
                    <span className={styles.sectionNumber}>{section.num}</span>
                    {t(`privacyPolicyPage.${section.titleKey}`)}
                  </h2>
                  <div
                    className={styles.contentText}
                    dangerouslySetInnerHTML={{
                      __html: t(`privacyPolicyPage.${section.textKey}`),
                    }}
                  />
                </section>
              ))}

              <section id="contact" className={styles.section}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.sectionNumber}>11</span>
                  {t("privacyPolicyPage.section11Title")}
                </h2>
                <div 
                  className={styles.contentText}
                  dangerouslySetInnerHTML={{
                    __html: t("privacyPolicyPage.section11Text")
                  }}
                />
                <div className={styles.contactCard}>
                  <div className={styles.contactItem} style={{borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem', marginBottom: '1rem'}}>
                    <span className={styles.contactLabel} style={{fontSize: '1rem', fontWeight: 'bold'}}>{t("privacyPolicyPage.companyName")}</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>
                      {t("privacyPolicyPage.emailLabel")}
                    </span>
                    <a
                      href={`mailto:${t("privacyPolicyPage.contactEmail")}`}
                      className={styles.contactValue}
                    >
                      {t("privacyPolicyPage.contactEmail")}
                    </a>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>
                      {t("privacyPolicyPage.locationLabel")}
                    </span>
                    <span className={styles.contactValue} style={{color: 'inherit', textDecoration: 'none'}}>
                      {t("privacyPolicyPage.contactLocation")}
                    </span>
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
