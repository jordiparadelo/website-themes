import React from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// Styles
// import "./FeaturesProperties_v3.scss";

const FeaturesProperties_v3 = () => {
  const { data, content, loading } = useDataContext();

  const PropertiesList = ({ properties, loading }) => (
    <HorizontalMediaScroller>
      {properties.map(
        (property) => (
          <PropertyCard
            key={property.id}
            data={property}
          />
        )
      )}
    </HorizontalMediaScroller>
  );

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
        <div className="header_actions">
          <button disabled data-previous>
            ←
          </button>
          <button data-next> → </button>
        </div>
      </header>
      {loading ? "⏲ loading ... " : <PropertiesList properties={data.hits} />}
    </div>
  );
};

export default FeaturesProperties_v3;
