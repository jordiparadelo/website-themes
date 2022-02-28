import React from "react";
import { Welcome, FeaturesProperties, Discover, Categories, Discounts, Instagram, Newsletter, Offers, Recommendations, RecommendedProperties, Reviews, TopRated } from "./layouts/index";

const App = () => {
  return (
    <>
      <Welcome version={2} />
      <FeaturesProperties version={2} />
      <Discover version={2} />
      <RecommendedProperties version={2} />
      <Categories version={2} />
      <Offers version={2} />
      <Instagram version={2} />
      <Discounts />
      <Newsletter />
      <Recommendations />
      <Reviews />
      <TopRated />
    </>
  );
};

export default App;
