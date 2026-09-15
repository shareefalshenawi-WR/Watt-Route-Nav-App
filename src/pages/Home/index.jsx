import { useTranslation } from "react-i18next";
import Hero from "../../components/sections/Hero/Hero";
import PinnedPanels from "../../components/sections/PinnedPanels/PinnedPanels";
import EVSolutions from "../../components/sections/EVSolutions/EVSolutions";
import Products from "../../components/sections/Products/Products";

const Home = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Hero />
      {/*
        key={i18n.language} forces React to fully unmount + remount PinnedPanels
        when the language changes. This is the correct way to reset GSAP ScrollTrigger
        instances that are tied to specific DOM nodes (which would otherwise become
        stale after a re-render, causing the ErrorBoundary to trigger).
      */}
      <PinnedPanels key={i18n.language} />
      <EVSolutions />
      <Products />
    </>
  );
};

export default Home;
