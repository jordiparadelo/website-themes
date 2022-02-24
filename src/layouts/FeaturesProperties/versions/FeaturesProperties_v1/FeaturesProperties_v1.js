import React from "react";
import PropertyCard from "../../../../components/PropertyCard/PropertyCard";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./FeaturesProperties_v1.scss";

const FeaturesProperties_v1 = () => {
  const { hits: properties } = useDataContext();
  // const properties = data.hits
  console.log(properties)

  return (
    properties.map(({ id, coverPhoto: { url: imageSrc }, imageAlt, title, price, type }) => <PropertyCard key={id} data={{ imageSrc, imageAlt, title, price, type }} />)
  );
};

export default FeaturesProperties_v1;
