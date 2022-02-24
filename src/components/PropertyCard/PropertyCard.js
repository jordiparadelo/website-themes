import React from "react";
// Styles
import "./PropertyCard.scss";

const PropertyCard = ({ data: { imageSrc, imageAlt, title, price, type } }) => {
  return (
    <figure className="property-card">
      <picture className="property_image">
        <img src={imageSrc} alt={imageAlt} lazy='true' />
      </picture>
      <figcaption className="property_content">
        <header className="content_title">
          <span className="tag">{type}</span>
          <h4 className="title">{title}</h4>
        </header>
        <div className="content_details">
          <p>Price: ${price}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default PropertyCard;
