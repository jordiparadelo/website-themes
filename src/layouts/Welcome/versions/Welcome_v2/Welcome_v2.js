import React from "react";
import { useDataContext } from "../../DataContext";

const Welcome_v2 = () => {
  const { title, text, tag, image } = useDataContext();

  return (
    <>
      <header>
        <span>{tag}</span>
        <h2>{title} 2</h2>
      </header>
      <p>{text}</p>
    </>
  );
};

export default Welcome_v2;
