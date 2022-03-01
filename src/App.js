import React from "react";
import { Welcome, FeaturesProperties, Discover, Categories, Discounts, Instagram, Newsletter, Offers, Recommendations, RecommendedProperties, Reviews, TopRated } from "./layouts/index";

const App = () => {
  return (
    <>
      <Welcome version={3} />
      <FeaturesProperties version={3} />
      <Discover version={3} />
      <RecommendedProperties version={3} />
      <Categories version={3} />
      <Offers version={3} />
      <Instagram version={3} />
      <Discounts />
      <Newsletter />
      <Recommendations />
      <Reviews />
      <TopRated />
    </>
  );
};

export default App;
