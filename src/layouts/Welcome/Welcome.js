import React, { useEffect, useRef } from "react";
// Styles
import "./Welcome.scss";
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
        <h2>Welcome to Whole life</h2>
      </header>
    </>
  );
};



const Welcome = ({ version }) => {
  const sectionRef = useRef(null);

  // Animation Init
  useEffect(() => {
    initAnimation()
  }, [])

  return (
    <DataProvider>
      <section id="Welcome" ref={sectionRef} data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Welcome;
