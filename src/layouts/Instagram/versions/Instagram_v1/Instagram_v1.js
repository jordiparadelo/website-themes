import React from "react";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Instagram_v1.scss";

const Instagram_v1 = () => {
  const { data, content } = useDataContext();

  // ImageGrid Compoenent
  const ImageGrid = ({ children }) => {
    const halfList = Math.ceil(data.length / 2);
    const firstHalf = data.slice(0, halfList);
    const secondHalf = data.slice(-halfList);

    return (
      <div className="images-grid">
        <>
          {firstHalf.map(({ image, title }, index) => (
            <figure
              key={title.split(" ").join("-") + "_image_" + index}
              className="grid_image"
            >
              <picture>
                <img
                  src={image}
                  alt={title}
                  width="300px"
                  height="300px"
                />
              </picture>
            </figure>
          ))}

          {children}

          {secondHalf.map(({ image, title }, index) => (
            <figure
              key={title.split(" ").join("-") + "_image_" + index}
              className="grid_image"
            >
              <picture>
                <img
                  src={image}
                  alt={title}
                  width="300px"
                  height="300px"
                />
              </picture>
            </figure>
          ))}
        </>
      </div>
    );
  };

  return (
    <ImageGrid>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
        <a href="/" className="button">
          Discover More
        </a>
      </header>
    </ImageGrid>
  );
};

export default Instagram_v1;
