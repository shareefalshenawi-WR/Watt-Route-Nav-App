import { useTranslation } from "react-i18next";
import Hero from "../../components/sections/Hero/Hero";
import DualCarScrollSection from "../../components/sections/DualCarScrollSection/DualCarScrollSection";
import EditorialStory from "../../components/sections/EditorialStory/EditorialStory";
import Features from "../../components/sections/Features/Features";
import Products from "../../components/sections/Products/Products";

const Home = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Hero />
      <DualCarScrollSection key={`dual-car-${i18n.language}`} />
      <EditorialStory key={`editorial-story-${i18n.language}`} />
      <Features />
      <Products />
    </>
  );
};

export default Home;
