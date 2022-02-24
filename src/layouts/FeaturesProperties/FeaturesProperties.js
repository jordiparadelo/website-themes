import React from "react";
// Styles
import "./FeaturesProperties.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

// Default
export const Default = () => {
  return (
    <>
      <header>
        <h2>Features Properties Default</h2>
      </header>
    </>
  );
};

const FeaturesProperties = ({ version }) => {
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

export default FeaturesProperties;
