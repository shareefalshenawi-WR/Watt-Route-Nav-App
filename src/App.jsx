import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import LoadingFallback from "./components/common/LoadingFallback/LoadingFallback";
import ErrorBoundary from "./components/common/ErrorBoundary/ErrorBoundary";
import { ROUTES } from "./constants/routes";
import "./App.css";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home/index.jsx"));
const EVSolutionsPage = lazy(() => import("./pages/EVSolutionsPage/index.jsx"));
const ProductsPage = lazy(() => import("./pages/ProductsPage/index.jsx"));
const SupportPage = lazy(() => import("./pages/SupportPage/index.jsx"));
const DownloadAppPage = lazy(() => import("./pages/DownloadAppPage/index.jsx"));
const FindChargingStationsPage = lazy(() =>
  import("./pages/FindChargingStationsPage/index.jsx")
);
const UserGuidePage = lazy(() => import("./pages/UserGuidePage/index.jsx"));
const VideoTutorialsPage = lazy(() =>
  import("./pages/VideoTutorialsPage/index.jsx")
);
const CommunityForumPage = lazy(() =>
  import("./pages/CommunityForumPage/index.jsx")
);
const AboutPage = lazy(() => import("./pages/About/index.jsx"));

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
                  <Suspense fallback={<LoadingFallback />}>
                    <Home />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.EV_SOLUTIONS}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <EVSolutionsPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.PRODUCTS}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <ProductsPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.ABOUT}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <AboutPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.HELP_USER_GUIDE}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <UserGuidePage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.HELP_VIDEO_TUTORIALS}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <VideoTutorialsPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.HELP_COMMUNITY_FORUM}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <CommunityForumPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.SUPPORT}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <SupportPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.DOWNLOAD_APP}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <DownloadAppPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path={ROUTES.FIND_CHARGING_STATIONS}
              element={
                <ErrorBoundary>
                  <Suspense fallback={<LoadingFallback />}>
                    <FindChargingStationsPage />
                  </Suspense>
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
