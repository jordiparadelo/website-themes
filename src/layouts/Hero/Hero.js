import React from "react";
// Styles
import "./Hero.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

// Default
export const Default = () => {
  return (
    <>
      <header>
        <h2>Hero default</h2>
      </header>
    </>
  );
};

const Hero = ({ version }) => {
  return (
    <DataProvider>
      <section id="Hero" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Hero;
