import React, { useEffect, useRef } from "react";
// Styles
import "./FeaturesProperties.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";
// Animations
import { initAnimation } from "./animations";
import useOnScreen from "../../hooks/useOnScreen";

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
  const sectionRef = useRef(null);
  const onScreen = useOnScreen(sectionRef, "-300px");

  // Animation Init
  useEffect(() => {
    onScreen && initAnimation()
  }, [onScreen])

  return (
    <DataProvider>
      <section id="FeaturesProperties" ref={sectionRef} data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default FeaturesProperties;
