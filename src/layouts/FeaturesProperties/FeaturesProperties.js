import React, { useEffect, useRef } from "react";
// Styles
import "./FeaturesProperties.scss";
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
        <h2>Features Properties Default</h2>
      </header>
    </>
  );
};

const FeaturesProperties = ({ version }) => {
  // Animation Init
  useEffect(() => {
    initAnimation()
  }, [])

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
