import React from "react";
// Styles
import "./Welcome.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

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
  return (
    <DataProvider>
      <section id="Welcome" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Welcome;
