import React from "react";
import { Welcome, FeaturesProperties, Discover, Categories, Discounts, Instagram, Newsletter, Offers, Recommendations, RecommendedProperties, Reviews, TopRated } from "./layouts/index";

const App = () => {
  return (
    <>
      <Welcome version={1} />
      <FeaturesProperties version={1} />
      <Categories />
      <Discover />
      <Discover />
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
