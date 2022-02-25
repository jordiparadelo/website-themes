import React from "react";
// Styles
import "./Discover.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

// Default
export const Default = () => {
  return (
    <>
      <header>
        <h2>Discover Default</h2>
      </header>
    </>
  );
};
const Discover = ({ version }) => {
  return (
    <DataProvider>
      <section id="FeaturesProperties" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Discover;
