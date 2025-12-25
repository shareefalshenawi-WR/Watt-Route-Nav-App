import React from "react";
import { useTranslation } from "react-i18next";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log error — replace with telemetry if available
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // Use a functional component wrapper to access hooks
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

function ErrorFallback() {
  const { t } = useTranslation();
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>{t("common.error")}</h2>
      <p>{t("common.errorMessage")}</p>
      <button onClick={() => window.location.reload()}>
        {t("common.reload")}
      </button>
    </div>
  );
}

export default ErrorBoundary;
