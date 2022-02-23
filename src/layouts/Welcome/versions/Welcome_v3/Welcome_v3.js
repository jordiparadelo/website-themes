import React from "react";
import { useDataContext } from "../../DataContext";
// Styles
// import "./Welcome_v3.scss";

const Welcome_v3 = () => {
  const { title, text, tag, image } = useDataContext();

  return (
    <div className="wrapper">
      <header className="header">
        <div className="header_title">
          <span>{tag}</span>
          <h2>{title}</h2>
        </div>
        <div className="header_description">
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
    </div>
  );
};

export default Welcome_v3;
