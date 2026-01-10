import Hero from "../../components/sections/Hero/Hero";
import PinnedPanels from "../../components/sections/PinnedPanels/PinnedPanels";
import EVSolutions from "../../components/sections/EVSolutions/EVSolutions";
// import WhatWeOffer from "../components/sections/WhatWeOffer/WhatWeOffer";
import Products from "../../components/sections/Products/Products";
import DownloadApp from "../../components/sections/DownloadApp/DownloadApp";

const Home = () => {
  return (
    <>
      <Hero />
      <PinnedPanels />
      <EVSolutions />
      {/* <WhatWeOffer /> */}
      <Products />
      <DownloadApp />
    </>
  );
};

export default Home;
