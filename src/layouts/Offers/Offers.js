import React from "react";
// Styles
import "./Offers.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

// Default
export const Default = () => {
  return (
    <>
      <header>
        <h2>Offers Default</h2>
      </header>
    </>
  );
};

const Offers = ({ version }) => {
  return (
    <DataProvider>
      <section id="Offers" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </section>
    </DataProvider>
  );
};

export default Offers;
