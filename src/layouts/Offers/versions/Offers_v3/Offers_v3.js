import React from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// Styles
// import "./Offers_v3.scss";

const Offers_v3 = () => {
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

export default Offers_v3;
