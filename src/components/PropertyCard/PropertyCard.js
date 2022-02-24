import React from "react";
// Styles
import "./PropertyCard.scss";

const PropertyCard = ({ data: { imageSrc, imageAlt, title, price, type } }) => {
  return (
    <figure>
      <picture>
        <img src={imageSrc} alt={imageAlt} />
      </picture>
      <figcaption className="content">
        <div className="wrapper">
          <header className="content_title">
            <span className="tag">{type}</span>
            <h4 className="title">{title}</h4>
          </header>
          <div className="content_details">
            <p>Price: ${price}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default PropertyCard;
