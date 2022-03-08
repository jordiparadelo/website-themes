import React, { useRef, useState } from "react";
import { useDataContext } from "../../DataContext";
// Resources
import { Logo } from '../../../../assets'
// // Styles
// import "./Footer_v1.scss";

const Footer_v1 = () => {
  const { data, content } = useDataContext();


  return (
    <>
      <Logo />
    </>
  );
};

export default Footer_v1;
