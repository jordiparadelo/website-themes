import React from "react";
// Styles
import "./Footer.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

// Default
export const Default = () => {
  return (
    <>
      <header>
        <h2>Footer default</h2>
      </header>
    </>
  );
};

const Footer = ({ version }) => {
  return (
    <DataProvider>
      <footer id="Footer" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </footer>
    </DataProvider>
  );
};

export default Footer;
