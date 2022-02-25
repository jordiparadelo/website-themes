import React from "react";
import { Welcome, FeaturesProperties, Discover, Categories, Discounts, Instagram, Newsletter, Offers, Recommendations, RecommendedProperties, Reviews, TopRated } from "./layouts/index";

const App = () => {
  return (
    <>
      <Welcome version={2} />
      <FeaturesProperties version={3} />
      <Discover version={1} />
      <Categories />
      <RecommendedProperties />
      <Discounts />
      <Instagram />
      <Newsletter />
      <Offers />
      <Recommendations />
      <Reviews />
      <TopRated />
    </>
  );
};

export default App;
