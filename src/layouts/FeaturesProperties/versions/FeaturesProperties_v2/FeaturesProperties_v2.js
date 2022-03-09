import React from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./FeaturesProperties_v1.scss";

const FeaturesProperties_v2 = () => {
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
    <>
      <header className="header">
        <div className="wrapper">
          <div className="header_title">
            <span>{content.tag}</span>
            <h2>{content.title}</h2>
          </div>
        </div>
      </header>
      {loading ? "⏲ loading ... " : <PropertiesList properties={data.hits} />}
    </>
  );
};

export default FeaturesProperties_v2;
