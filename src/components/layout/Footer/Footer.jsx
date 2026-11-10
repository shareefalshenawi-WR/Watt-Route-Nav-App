import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AsyncImage from "../../common/AsyncImage/AsyncImage";
import { ROUTES } from "../../../constants/routes";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  if (location.pathname === ROUTES.DOWNLOAD_APP) {
    return null;
  }

  const footerLinks = {
    company: [
      { name: t("footer.aboutUs"), path: ROUTES.ABOUT, key: "aboutUs" },
      {
        name: t("footer.evSolutions"),
        path: ROUTES.EV_SOLUTIONS,
        key: "evSolutions",
      },
      { name: t("footer.products"), path: ROUTES.PRODUCTS, key: "products" },
      { name: t("footer.support"), path: ROUTES.SUPPORT, key: "support" },
    ],
    contact: [
      {
        name: t("footer.helpCenter"),
        path: ROUTES.SUPPORT,
        key: "helpCenter",
        isExternal: false,
      },
      {
        name: "WhatsApp Support",
        path: "https://wa.me/201508275572",
        key: "whatsapp",
        isExternal: true,
      },
      {
        name: t("footer.email"),
        path: "mailto:info@wattrouteapp.com",
        key: "email",
        isExternal: true,
      },
      {
        name: t("footer.phone"),
        path: "tel:+201508275572",
        key: "phone",
        isExternal: true,
      },
    ],
    legal: [
      {
        name: t("footer.termsOfService"),
        path: ROUTES.TERMS_AND_CONDITIONS,
        key: "terms",
      },
      {
        name: t("footer.privacyPolicy"),
        path: ROUTES.PRIVACY_POLICY,
        key: "privacy",
      },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.content}>
          {/* Brand Info (Left) */}
          <div className={styles.brandSection}>
            <Link
              to={ROUTES.HOME}
              className={styles.logo}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <AsyncImage
                src="/images/logo.webp"
                alt="Watt Route Logo"
                className={styles.logoImage}
              />
              <span className={styles.logoText}>Watt Route</span>
            </Link>

            <p className={styles.description}>{t("footer.description")}</p>

            {/* Download Buttons */}
            <div className={styles.downloadButtons}>
              <Link
                to={ROUTES.DOWNLOAD_APP}
                className={styles.storeButton}
                aria-label={t("downloadApp.downloadOnAppStore")}
              >
                <AsyncImage
                  src="/images/app-store.webp"
                  alt={t("downloadApp.downloadOnAppStore")}
                />
              </Link>
              <Link
                to={ROUTES.DOWNLOAD_APP}
                className={styles.storeButton}
                aria-label={t("downloadApp.getItOnGooglePlay")}
              >
                <AsyncImage
                  src="/images/google-play.webp"
                  alt={t("downloadApp.getItOnGooglePlay")}
                />
              </Link>
            </div>

            <p className={styles.copyright}>
              {t("footer.copyright", { year: currentYear })}
            </p>
          </div>

          {/* Navigation Links Grid  */}
          <div className={styles.linksGrid}>
            {/* Company Column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t("footer.company")}</h4>
              <ul className={styles.linkList}>
                {footerLinks.company.map((link) => (
                  <li key={link.key}>
                    <Link to={link.path} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support / Contact Column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>{t("footer.contact")}</h4>
              <ul className={styles.linkList}>
                {footerLinks.contact.map((link) => (
                  <li key={link.key}>
                    {link.isExternal ? (
                      <a
                        href={link.path}
                        className={styles.link}
                        target={link.path.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.path.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path} className={styles.link}>
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>
                {t("footer.legal", "Legal")}
              </h4>
              <ul className={styles.linkList}>
                {footerLinks.legal.map((link) => (
                  <li key={link.key}>
                    <Link to={link.path} className={styles.link}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Giant Watermark Typography */}
        <div className={styles.watermarkWrapper} aria-hidden="true">
          <svg
            viewBox="0 0 1200 185"
            className={styles.watermarkSvg}
            preserveAspectRatio="xMidYMax meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="195"
              textAnchor="middle"
              className={styles.watermarkSvgText}
            >
              watt route
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
