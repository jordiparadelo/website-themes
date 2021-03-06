import React from "react";
import { HorizontalMediaScroller } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Discover_v1.scss";

const Discover_v1 = () => {
  const { data, content } = useDataContext();
  // console.log(data);

  const ImageGallery = ({ data: { title, image, link } }) => (
    <a href={link} className="image-gallery">
      <figure className="container">
        <picture className="image_cover">
          <img src={image} alt={title} width="150" height="150" />
        </picture>
        <figcaption className="image_content">
          <h3>{title}</h3>
        </figcaption>
      </figure>
    </a>
  );

  const Gallery = ({ gallery }) => (
    <HorizontalMediaScroller>
      {gallery.map((data, index) => (
        <ImageGallery key={data.title} data={data} />
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
      <Gallery gallery={data} />
    </>
  );
};

export default Discover_v1;
