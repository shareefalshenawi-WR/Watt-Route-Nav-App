import React, { useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "./context/ThemeContext";
import { ROUTES } from "./constants/routes";
import "./App.css";

// Page imports
import Home from "./pages/Home/index.jsx";
import EVSolutionsPage from "./pages/EVSolutionsPage/index.jsx";
import ProductsPage from "./pages/ProductsPage/index.jsx";
import SupportPage from "./pages/SupportPage/index.jsx";
import DownloadAppPage from "./pages/DownloadAppPage/index.jsx";
import UserGuidePage from "./pages/UserGuidePage/index.jsx";
import VideoTutorialsPage from "./pages/VideoTutorialsPage/index.jsx";
import CommunityForumPage from "./pages/CommunityForumPage/index.jsx";
import AboutPage from "./pages/About/index.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/index.jsx";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage/index.jsx";

gsap.registerPlugin(ScrollTrigger);

/**
 * Kills ALL active GSAP ScrollTrigger instances and resets scroll position.
 * This is critical when navigating away from pages that use pinned ScrollTriggers
 * (like Hero and PinnedPanels), otherwise the pin persists and blocks navigation.
 */
function ScrollManager() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // 1. Kill every active ScrollTrigger so pinned sections are released
    ScrollTrigger.getAll().forEach((st) => st.kill());
    ScrollTrigger.clearScrollMemory();

    // Reset styles that GSAP pins might have written to body/html
    gsap.set("body", { clearProps: "all" });
    gsap.set("html", { clearProps: "all" });

    // 2. Reset scroll position instantly (before paint)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // 3. Let ScrollTrigger recalculate layout for the new page
    ScrollTrigger.refresh(true);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path={ROUTES.HOME}
        element={
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.EV_SOLUTIONS}
        element={
          <ErrorBoundary>
            <EVSolutionsPage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.PRODUCTS}
        element={
          <ErrorBoundary>
            <ProductsPage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.ABOUT}
        element={
          <ErrorBoundary>
            <AboutPage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.HELP_USER_GUIDE}
        element={
          <ErrorBoundary>
            <UserGuidePage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.HELP_VIDEO_TUTORIALS}
        element={
          <ErrorBoundary>
            <VideoTutorialsPage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.HELP_COMMUNITY_FORUM}
        element={
          <ErrorBoundary>
            <CommunityForumPage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.SUPPORT}
        element={
          <ErrorBoundary>
            <SupportPage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.DOWNLOAD_APP}
        element={
          <ErrorBoundary>
            <DownloadAppPage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.PRIVACY_POLICY}
        element={
          <ErrorBoundary>
            <PrivacyPolicyPage />
          </ErrorBoundary>
        }
      />
      <Route
        path={ROUTES.TERMS_AND_CONDITIONS}
        element={
          <ErrorBoundary>
            <TermsAndConditionsPage />
          </ErrorBoundary>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollManager />
        <div className="app">
          <Navbar />
          <AppRoutes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
