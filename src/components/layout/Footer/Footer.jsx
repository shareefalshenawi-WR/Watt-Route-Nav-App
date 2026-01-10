import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AsyncImage from "../../common/AsyncImage/AsyncImage";
import { ROUTES } from "../../../constants/routes";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

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
    resources: [
      { name: t("footer.helpCenter"), path: ROUTES.SUPPORT, key: "helpCenter" },
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            {/*  Logo placeholder */}
            <div className={styles.logo}>
              <AsyncImage
                src="/images/logo.webp"
                alt="Watt Route Logo"
                className={styles.logoImage}
              />
              <span className={styles.logoText}>Watt Route</span>
            </div>
            <p className={styles.description}>{t("footer.description")}</p>

            {/* Download Buttons */}
            <div className={styles.downloadButtons}>
              <Link to={ROUTES.DOWNLOAD_APP} className={styles.storeButton}>
                <AsyncImage
                  src="/images/app-store.webp"
                  alt={t("downloadApp.downloadOnAppStore")}
                />
              </Link>
              <Link to={ROUTES.DOWNLOAD_APP} className={styles.storeButton}>
                <AsyncImage
                  src="/images/google-play.webp"
                  alt={t("downloadApp.getItOnGooglePlay")}
                />
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>{t("footer.company")}</h4>
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

          {/* Resources Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>{t("footer.resources")}</h4>
            <ul className={styles.linkList}>
              {footerLinks.resources.map((link) => (
                <li key={link.key}>
                  <Link to={link.path} className={styles.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.linkSection}>
            <h4 className={styles.linkTitle}>{t("footer.contact")}</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:info@wattrouteapp.com" className={styles.link}>
                  {t("footer.email")}
                </a>
              </li>
              <li>
                <a href="tel:+201552363927" className={styles.link}>
                  {t("footer.phone")}
                </a>
              </li>
              <li>
                <a href="https://wa.me/+201552363927" className={styles.link}>
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            {t("footer.copyright", { year: currentYear })}
          </p>
          <div className={styles.bottomLinks}>
            <Link to="/terms" className={styles.bottomLink}>
              {t("footer.termsOfService")}
            </Link>
            <Link to="/privacy" className={styles.bottomLink}>
              {t("footer.privacyPolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
