import React, { useRef, useState } from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Categories_v3.scss";

const Categories_v3 = () => {
  const { data, content, loading } = useDataContext();

  // PropertiesList Compoenent
  const PropertiesList = () => {
    return loading ? (
      "⏲ loading ... "
    ) : (
      <HorizontalMediaScroller>
        {data.hits.map(
          ({
            id,
            coverPhoto: { url: imageSrc },
            imageAlt,
            title,
            price,
            type,
          }) => (
            <PropertyCard
              key={id}
              data={{ imageSrc, imageAlt, title, price, type }}
              id={`reccomendedProperty_${id}`}
              attr={{ tabIndex: 0 }}
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

export default Categories_v3;
