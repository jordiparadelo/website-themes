import React from "react";
// Styles
import "./Instagram.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

// Default
export const Default = () => {
  return (
    <>
      <header>
        <h2>Instagram default</h2>
      </header>
    </>
  );
};

const Instagram = ({ version }) => {
  return (
    <DataProvider>
      <section id="Instagram" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Instagram;
