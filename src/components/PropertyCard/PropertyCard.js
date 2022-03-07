import React from "react";
// Styles
import "./PropertyCard.scss";

const PropertyCard = ({
  data,
  data: { coverPhoto, imageAlt, title, price, location, accommodation },
  className,
  id,
  attr,
}) => {
  console.log(data);
  return (
    <figure
      className={className ? `property-card ${className}` : "property-card"}
      id={id || id}
      {...attr}
    >
      <picture className="property_image">
        <img src={coverPhoto.url || ""} alt={imageAlt || ""} lazy="true" />
      </picture>
      <figcaption className="property_content">
        <header className="content_title">
          <span className="tag">{location || "Type of Accomodation"}</span>
          <h4 className="title">{title || "Name of Accomodation"}</h4>
        </header>
        <div className="content_details">
          <div className="details_price">
            <p>Price: €{price || "1000"}</p>
          </div>
          <div className="details_accommodation">
            <p className="hosts">{accommodation.hosts}</p>
            <p className="hosts">{accommodation.room}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default PropertyCard;
