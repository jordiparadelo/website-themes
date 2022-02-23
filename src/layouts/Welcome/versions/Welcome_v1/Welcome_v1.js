import React, { useEffect } from "react";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Welcome_v1.scss";

const Welcome_v1 = () => {
  const { title, text, tag, image } = useDataContext();

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{tag}</span>
          <h2>{title}</h2>
        </div>
        <p className="header_description">{text}</p>
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

export default Welcome_v1;
