import React from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// Styles
// import "./Offers_v3.scss";

const Offers_v3 = () => {
  const { data, content, loading } = useDataContext();

  // OfferCard Component
  const OfferCard = ({ data: { title, description, image } }) => (
    <figure className="offer-card">
      <picture className="offer_image">
        <img src={image.src} alt={image.alt} />
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
      </div>
      {loading ? "⏲ loading ... " : <OffersList offers={data} />}
    </>
  );
};

export default Offers_v3;
