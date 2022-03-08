import React, { useEffect, useRef } from "react";
// Styles
import "./Categories.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";
// Animations
import { initAnimation } from "./animations";

// Default
export const Default = () => {
  return (
    <>
      <header>
        <h2>Categories default</h2>
      </header>
    </>
  );
};

const Categories = ({ version }) => {
  const sectionRef = useRef(null);

  // Animation Init
  useEffect(() => {
    initAnimation()
  }, [])

  return (
    <DataProvider>
      <section id="Categories" ref={sectionRef} data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Categories;
