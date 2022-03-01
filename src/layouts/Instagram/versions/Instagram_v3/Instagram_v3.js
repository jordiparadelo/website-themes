import React from "react";
import { HorizontalMediaScroller } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Instagram_v3.scss";

const Instagram_v3 = () => {
  const { data, content } = useDataContext();

  // ImageGrid Compoenent
  const ImageGrid = () => (
    <HorizontalMediaScroller>
      {data.map(({ image, title }, index) => (
        <figure
          key={title.split(" ").join("-") + "_image_" + index}
          className="grid_image"
        >
          <picture>
            <img src={image} alt={title} width="300px" height="300px" />
          </picture>
        </figure>
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
        </header>
      </div>
      <ImageGrid />
    </>
  );
};

export default Instagram_v3;
