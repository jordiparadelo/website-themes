import React from "react";
import { useDataContext } from "../../DataContext";

const Welcome_v3 = () => {
  const { title, text, tag, image } = useDataContext();

  return (
    <>
      <header>
        <span>{tag}</span>
        <h2>{title} 3</h2>
      </header>
      <p>{text}</p>
    </>
  );
};

export default Welcome_v3;
