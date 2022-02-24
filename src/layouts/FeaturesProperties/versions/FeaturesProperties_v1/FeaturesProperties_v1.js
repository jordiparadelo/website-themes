import React from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./FeaturesProperties_v1.scss";

const FeaturesProperties_v1 = () => {
  const { data, content, loading } = useDataContext();

  const PropertiesList = ({ properties, loading }) => (
    <HorizontalMediaScroller>
      {properties.map(
        ({ id, coverPhoto: { url: imageSrc }, imageAlt, title, price, type }) => <PropertyCard key={id} data={{ imageSrc, imageAlt, title, price, type }} />
      )}
    </HorizontalMediaScroller>
  )

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
        <button className="primary">{content.button}</button>
      </header>
      {loading ? '⏲ loading ... ' : <PropertiesList properties={data.hits} />}
    </>

  );
};

export default FeaturesProperties_v1;
