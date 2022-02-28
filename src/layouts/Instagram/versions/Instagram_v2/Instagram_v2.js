import React from "react";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Instagram_v2.scss";

const Instagram_v2 = () => {
  const { data, content } = useDataContext();

  // ImageGrid Compoenent
  const ImageGrid = () => {
    const third = Math.ceil(data.length / 3);
    const firstThird = data.slice(0, third);
    const secondThird = data.slice(-third);
    const thirdThird = data.slice(third, -third);

    return (
      <div className="images-grid">
        <div className="grid-col">
          {/* firstThird */}
          {firstThird.map(({ image, title }, index) => (
            <figure
              key={title.split(" ").join("-") + "_image_" + index}
              className="grid_image"
            >
              <picture>
                <img src={image} alt={title} width="300px" height="300px" />
              </picture>
            </figure>
          ))}
        </div>
        {/* secondThird */}
        <div className="grid-col">
          {secondThird.map(({ image, title }, index) => (
            <figure
              key={title.split(" ").join("-") + "_image_" + index}
              className="grid_image"
            >
              <picture>
                <img src={image} alt={title} width="300px" height="300px" />
              </picture>
            </figure>
          ))}
        </div>
        {/* thirdThird */}
        <div className="grid-col">
          {thirdThird.map(({ image, title }, index) => (
            <figure
              key={title.split(" ").join("-") + "_image_" + index}
              className="grid_image"
            >
              <picture>
                <img src={image} alt={title} width="300px" height="300px" />
              </picture>
            </figure>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
        <div className="header_actions">
          <a href="/" className="button ghost">
            Discover More
          </a>
        </div>
      </header>
      <ImageGrid />
    </>
  );
};

export default Instagram_v2;
