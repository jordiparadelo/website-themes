import React, { useRef, useState } from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Categories_v1.scss";

const Categories_v1 = () => {
  const { data, content, loading } = useDataContext();

  // CaegoriesList Compoenent
  const CaegoriesList = () => (
    <menu className="category-list">
      {data.map(({ title, link }, index) => (
        <a
          key={title.split(" ").join("-") + "_link_" + index}
          className="category_item"
          href={link}
          aria-label={`Go to ${title} category`}
        >
          <span>{title}</span>
          <span>-></span>
        </a>
      ))}
    </menu>
  );

  // ImageGrid Compoenent
  const ImageGrid = () => (
    <div className="images-grid">
      {data.map(({ image, title }, index) => (
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
    </div>
  );

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
        <CaegoriesList />
      </header>
      <ImageGrid />
    </>
  );
};

export default Categories_v1;
