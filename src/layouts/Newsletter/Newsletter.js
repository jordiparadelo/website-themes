import React from "react";
// Styles
import "./Newsletter.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

// Default
export const Default = () => {
  return (
    <>
      <header>
        <h2>Newsletter default</h2>
      </header>
    </>
  );
};

const Newsletter = ({ version }) => {
  return (
    <DataProvider>
      <section id="Newsletter" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Newsletter;
