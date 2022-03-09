import React, { useRef, useState } from "react";
import { HorizontalMediaScroller, PropertyCard } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./RecommendedProperties_v1.scss";

const RecommendedProperties_v1 = () => {
  const { data, content, loading } = useDataContext();

  // PropertiesList Compoenent
  const PropertiesList = () => {
    return loading ? (
      "⏲ loading ... "
    ) : (
      <HorizontalMediaScroller>
        {data.hits.map(
          (property) => (
            <PropertyCard
              key={property.id}
              data={property}
            />
          )
        )}
      </HorizontalMediaScroller>
    );
  };
  // Pagination Compoenent
  const Pagination = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const paginationRef = useRef(null);

    // Methods
    function handleClick(event) {
      event.preventDefault();

      const { currentTarget } = event;
      const selectedProperty = document.querySelector(currentTarget.hash);
      const scroller = selectedProperty.parentElement;
      const left = selectedProperty.clientWidth * currentTarget.dataset.index;

      // Change to ActiveIndex to selected element
      setActiveIndex(parseInt(currentTarget.dataset.index));

      // Scroll to selected element
      scroller.scrollTo({
        left: left,
        behavior: "smooth",
      });
    }

    return (
      <nav
        className="header_pagination"
        role="navigation"
        aria-label="Pagination Navigation"
        ref={paginationRef}
      >
        <menu>
          {loading
            ? "⏲ loading ... "
            : data.hits.map(({ id, title }, index) => {
              return (
                <a
                  onClick={handleClick}
                  data-index={index}
                  className="pagination_link"
                  key={title + id}
                  aria-label={`Goto ${title}`}
                  href={`#reccomendedProperty_${id}`}
                  disabled={activeIndex !== index}
                  aria-current={activeIndex === index}
                >
                  <span hidden>Link to {title}</span>
                </a>
              );
            })}
        </menu>
      </nav>
    );
  };

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h2>{content.title}</h2>
        </div>
        <Pagination />
      </header>
      <PropertiesList />
    </>
  );
};

export default RecommendedProperties_v1;
