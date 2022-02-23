import React from "react";
import { useDataContext } from "../../DataContext";
// Styles
import "./Welcome_v1.scss";

const Welcome_v1 = () => {
  const { title, text, tag, image } = useDataContext();

  return (
    <>
      <header className="header">
        <div className="header_title">
          <span>{tag}</span>
          <h2>{title} 1</h2>
        </div>
        <p className="header_description">{text}</p>
      </header>
      <figure className="cover-image">
        <img
          src="https://images.pexels.com/photos/1249586/pexels-photo-1249586.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="Sky view of the shore of a beach"
        />
      </figure>
    </>
  );
};

export default Welcome_v1;
