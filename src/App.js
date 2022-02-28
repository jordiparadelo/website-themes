import React from "react";
import { Welcome, FeaturesProperties, Discover, Categories, Discounts, Instagram, Newsletter, Offers, Recommendations, RecommendedProperties, Reviews, TopRated } from "./layouts/index";

const App = () => {
  return (
    <>
      <Welcome version={1} />
      <FeaturesProperties version={1} />
      <Discover version={1} />
      <RecommendedProperties version={1} />
      <Categories version={1} />
      <Offers version={1} />
      <Instagram version={1} />
      <Discounts />
      <Newsletter />
      <Recommendations />
      <Reviews />
      <TopRated />
    </>
  );
};

export default App;
