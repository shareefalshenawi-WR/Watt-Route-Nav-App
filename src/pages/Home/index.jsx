import { useTranslation } from "react-i18next";
import Hero from "../../components/sections/Hero/Hero";
import DualCarScrollSection from "../../components/sections/DualCarScrollSection/DualCarScrollSection";
import PinnedPanels from "../../components/sections/PinnedPanels/PinnedPanels";
import EVSolutions from "../../components/sections/EVSolutions/EVSolutions";
import Products from "../../components/sections/Products/Products";

const Home = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Hero />
      <DualCarScrollSection key={`dual-car-${i18n.language}`} />
      <PinnedPanels key={i18n.language} />
      <EVSolutions />
      <Products />
    </>
  );
};

export default Home;
