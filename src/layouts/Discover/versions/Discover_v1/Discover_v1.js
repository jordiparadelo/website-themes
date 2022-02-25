import React from "react";
import { HorizontalMediaScroller } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Discover_v1.scss";

const Discover_v1 = () => {
  const { data, content } = useDataContext();
  console.log(data);

  const ImageGallery = ({ data: { title, image, link } }) => (
    <a href={link}>
      <figure>
        <picture>
          <img src={image} alt={`image of ${title}`} />
        </picture>
        <figcaption>
          <h3>{title}</h3>
        </figcaption>
      </figure>
    </a>
  );

  const Gallery = ({ gallery }) => (
    <HorizontalMediaScroller>
      {gallery.map((data, index) => (
        <ImageGallery key={data.title + index} data={data} />
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
        <button className="primary">{content.button}</button>
      </header>
      <Gallery gallery={data} />
    </>
  );
};

export default Discover_v1;
