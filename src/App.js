import React from "react";
import {
  Navbar,
  Hero,
  Welcome,
  FeaturesProperties,
  Discover,
  Categories,
  Discounts,
  Instagram,
  Newsletter,
  Offers,
  Recommendations,
  RecommendedProperties,
  Reviews,
  TopRated,
  Footer,
} from "./layouts/index";

const App = () => {
  return (
    <>
      <Navbar version={1} />
      <main>
        <Hero version={2} />
        <Welcome version={2} />
        <FeaturesProperties version={2} />
        <Discover version={2} />
        <RecommendedProperties version={2} />
        <Categories version={1} />
        <Offers version={2} />
        <Instagram version={2} />
        <Newsletter version={1} />
      </main>
      <Footer version={3} />
      {/* <Discounts /> */}
      {/* <Recommendations /> */}
      {/* <Reviews /> */}
      {/* <TopRated /> */}
    </>
  );
};

export default App;
