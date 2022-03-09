import React, { useRef, useState } from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./RecommendedProperties_v3.scss";

const RecommendedProperties_v3 = () => {
  const { data, content, loading } = useDataContext();

  // PropertiesList Compoenent
  const PropertiesList = () => {
    return loading ? (
      "⏲ loading ... "
    ) : (
      <HorizontalMediaScroller>
        {data.hits.map(
          (property) => (
            <PropertyCard
              key={property.id}
              data={property}
            />
          )
        )}
      </HorizontalMediaScroller>
    );
  };

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
      </header>
      <PropertiesList />
    </div>
  );
};

export default RecommendedProperties_v3;
