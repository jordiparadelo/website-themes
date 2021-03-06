import React from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Offers_v2.scss";

const Offers_v2 = () => {
  const { data, content, loading } = useDataContext();

  // OfferCard Component
  const OfferCard = ({ data: { title, description, image } }) => (
    <figure className="offer-card">
      <picture className="offer_image">
        <img src={image.src} alt={image.alt} width="150" height="150" />
      </picture>
      <figcaption className="offer_content">
        <time dateTime={description.date} className="content_date">
          {description.date}
        </time>
        <h3 className="content_tile">{title}</h3>
        <button className="content_cta ghost">Find More about it</button>
      </figcaption>
    </figure>
  );
  // OffersList Component
  const OffersList = ({ offers }) => (
    <HorizontalMediaScroller>
      {offers.map(({ title, description, image }, index) => (
        <OfferCard key={title + "_" + index} data={{ title, description, image }} />
      ))}
    </HorizontalMediaScroller>
  );

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
      </header>
      {loading ? "⏲ loading ... " : <OffersList offers={data} />}
    </>
  );
};

export default Offers_v2;
