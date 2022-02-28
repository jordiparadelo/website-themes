import React from "react";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Categories_v2.scss";

const Categories_v2 = () => {
  const { data, content } = useDataContext();

  // Methods
  function handleHoverIn({ currentTarget }) {
    const categoyId = currentTarget.dataset.categoryId
    const imageSelected = document.querySelector(`[data-image-id = "${categoyId}"]`)

    imageSelected.dataset.state = 'visible'
  }
  function handleHoverOut() {
    const allImages = [...document.querySelectorAll('.grid_image')]
    allImages.forEach(image => { delete image.dataset.state })
  }

  // CaegoriesList Compoenent
  const CaegoriesList = () => (
    <div className="category-list">
      <menu className="category_menu">
        {data.map(({ title, link }, index) => (
          <a
            key={title.split(" ").join("-") + "_link_" + index}
            className="category_item"
            href={link}
            aria-label={`Go to ${title} category`}
            data-category-id={title}
            onMouseEnter={handleHoverIn}
            onFocusCapture={handleHoverIn}
            onMouseLeave={handleHoverOut}
          >
            {title}
          </a>
        ))}
      </menu>
      <ImageGrid />
    </div>
  );

  // ImageGrid Compoenent
  const ImageGrid = () => (
    <div className="category_images-grid">
      {data.map(({ image, title }, index) => (
        <figure
          key={title.split(" ").join("-") + "_image_" + index}
          className="grid_image"
          data-image-id={title}
        >
          <picture>
            <img
              src={image}
              alt={`image of ${title}`}
              width="300"
              height="300"
              lazy="true"
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
          <h2>{content.tag}</h2>
        </div>
      </header>
      <CaegoriesList />
    </>
  );
};

export default Categories_v2;
