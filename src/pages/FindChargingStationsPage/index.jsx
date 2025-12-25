import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { fadeInUp } from "../../utils/animations";
import Button from "../../components/common/Button/Button";
import { ROUTES } from "../../constants/routes";
import styles from "./FindChargingStationsPage.module.css";

const FindChargingStationsPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className={styles.title}>
            {t("findChargingPage.comingSoonTitle")}
          </h1>
          <p className={styles.description}>
            {t("findChargingPage.comingSoonDesc")}
          </p>
          <Link to={ROUTES.HOME}>
            <Button variant="secondary" size="large">
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FindChargingStationsPage;
