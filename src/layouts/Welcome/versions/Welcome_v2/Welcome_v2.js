import React from "react";
import { useDataContext } from "../../DataContext";
// Styles
// import "./Welcome_v2.scss";

const Welcome_v2 = () => {
  const { title, text, tag, image } = useDataContext();

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{tag}</span>
          <h2>{title}</h2>
        </div>
        <div className="header_description">
          <p>{text}</p>
          <p>{text}</p>
        </div>
      </header>
      <figure className="cover-image">
        <img
          src={image}
          width="300px"
          height="150px"
          alt="Sky view of the shore of a beach"
        />
      </figure>
    </>
  );
};

export default Welcome_v2;
