import React from "react";
import { HorizontalMediaScroller } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Categories_v3.scss";

const Categories_v3 = () => {
  const { data, content } = useDataContext();

  // CaegoriesList Compoenent
  const CaegoriesList = () => (
    <div className="category-list">
      <menu className="category_menu">
        <HorizontalMediaScroller>
          {data.map(({ image, title, link }, index) => (
            <a
              key={title.split(" ").join("-") + "_link_" + index}
              className="category_item"
              href={link}
              aria-label={`Go to ${title} category`}
            >
              <figure className="category_card">
                <picture className="card_avatar">
                  <img
                    src={image}
                    alt={title}
                    width="300px"
                    height="300px"
                    lazy="true"
                  />
                </picture>
                <figcaption className="card_title">{title}</figcaption>
              </figure>
            </a>
          ))}
        </HorizontalMediaScroller>
      </menu>
    </div>
  );

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
      </header>
      <CaegoriesList />
    </div>
  );
};

export default Categories_v3;
