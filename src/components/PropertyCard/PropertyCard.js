import React from "react";
// Styles
import "./PropertyCard.scss";

const PropertyCard = ({ data: { imageSrc, imageAlt, title, price, type }, className, id, attr }) => {
  return (
    <figure className={className ? `property-card ${className}` : 'property-card'} id={id || id} {...attr}>
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
