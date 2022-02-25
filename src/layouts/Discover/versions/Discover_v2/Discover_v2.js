import React from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Discover_v2.scss";

const Discover_v2 = () => {
  const { data, content, loading } = useDataContext();

  const PropertiesList = ({ properties, loading }) => (
    <HorizontalMediaScroller>
      {properties.map(
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

export default Discover_v2;
