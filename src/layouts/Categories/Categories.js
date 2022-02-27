import React from "react";
// Styles
import "./Categories.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

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
  return (
    <DataProvider>
      <section id="Categories" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Categories;
