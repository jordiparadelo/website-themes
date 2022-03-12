import React, { useEffect } from "react";
// Styles
import "./RecommendedProperties.scss";
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
        <h2>Recommended Properties default</h2>
      </header>
    </>
  );
};

const RecommendedProperties = ({ version }) => {
  // Animation Init
  useEffect(() => {
    initAnimation()
  }, [])
  return (
    <DataProvider>
      <section id="RecommendedProperties" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default RecommendedProperties;
