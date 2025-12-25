import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LoadingFallback.module.css";

const LoadingFallback = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.loaderWrap} role="status" aria-live="polite">
      <div className={styles.spinner} />
      <div className={styles.text}>{t("common.loading")}</div>
    </div>
  );
};

export default LoadingFallback;
