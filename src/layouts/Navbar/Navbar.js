import React from "react";
// Styles
import "./Navbar.scss";
// Version
import { VersionProvider } from "./versions/VersionContext.js";
// Data
import { DataProvider } from "./DataContext";

// Default
export const Default = () => {
  return (
    <>
      <nav>
        <h2>Navbar default</h2>
      </nav>
    </>
  );
};

const Navbar = ({ version }) => {
  return (
    <DataProvider>
      <nav id="Navbar" data-version={version || null}>
        {version
          ? <VersionProvider version={version} />
          : <Default />
        }
      </nav>
    </DataProvider>
  );
};

export default Navbar;
