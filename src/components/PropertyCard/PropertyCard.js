import React from "react";
// Styles
import "./PropertyCard.scss";

const PropertyCard = ({
  data: { coverPhoto, imageAlt, title, price, location, accommodation },
  className,
  id,
  attr,
}) => {
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
          <span className="location">{location || "Type of Accomodation"}</span>
          <h4 className="title">{title || "Name of Accomodation"}</h4>
        </header>
        <div className="content_details">
          <div className="details_price">
            <p><span className="tag">Price:</span> €{price || "1000"}</p>
          </div>
          <div className="details_accommodation">
            <p className="hosts" title="hosts"> <span className="tag">Hosts</span> {accommodation.hosts}</p>
            <p className="room" title="rooms">  <span className="tag">Rooms</span> {accommodation.room}</p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default PropertyCard;
