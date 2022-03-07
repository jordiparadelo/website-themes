import React from "react";
import { Searcher } from "../../../../components";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Hero_v1.scss";

const Hero_v1 = () => {
  const { content } = useDataContext();

  return (
    <>
      <picture className="cover-image">
        <img
          src={content.image.src}
          alt={content.image.alt}
          width="1440px"
          height="1024px"
        />
      </picture>
      <header className="header">
        <div className="header_title">
          <span>{content.tag}</span>
          <h1><span>{content.title[0]}</span>{content.title[1]}</h1>
        </div>
        <Searcher />
      </header>
    </>
  );
};

export default Hero_v1;
