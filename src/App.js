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
        <Welcome version={1} />
        <FeaturesProperties version={1} />
        <Discover version={1} />
        <RecommendedProperties version={1} />
        <Categories version={1} />
        <Offers version={1} />
        <Instagram version={1} />
        <Newsletter version={1} />
      </main>
      <Footer version={1} />
      {/* <Discounts /> */}
      {/* <Recommendations /> */}
      {/* <Reviews /> */}
      {/* <TopRated /> */}
    </>
  );
};

export default App;
