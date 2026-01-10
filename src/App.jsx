import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";
import { ROUTES } from "./constants/routes";
import "./App.css";

// Direct imports
import Home from "./pages/Home/index.jsx";
import EVSolutionsPage from "./pages/EVSolutionsPage/index.jsx";
import ProductsPage from "./pages/ProductsPage/index.jsx";
import SupportPage from "./pages/SupportPage/index.jsx";
import DownloadAppPage from "./pages/DownloadAppPage/index.jsx";
import FindChargingStationsPage from "./pages/FindChargingStationsPage/index.jsx";
import UserGuidePage from "./pages/UserGuidePage/index.jsx";
import VideoTutorialsPage from "./pages/VideoTutorialsPage/index.jsx";
import CommunityForumPage from "./pages/CommunityForumPage/index.jsx";
import AboutPage from "./pages/About/index.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top on route change for consistent restoration
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
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
              path={ROUTES.FIND_CHARGING_STATIONS}
              element={
                <ErrorBoundary>
                  <FindChargingStationsPage />
                </ErrorBoundary>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
