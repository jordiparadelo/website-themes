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
        <Hero version={3} />
        <Welcome version={3} />
        <FeaturesProperties version={3} />
        <Discover version={3} />
        <RecommendedProperties version={3} />
        <Categories version={3} />
        <Offers version={3} />
        <Instagram version={3} />
        <Newsletter version={3} />
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
