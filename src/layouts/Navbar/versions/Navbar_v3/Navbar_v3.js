import React, { useRef, useState } from "react";
import { useDataContext } from "../../DataContext";
// // Styles
// import "./Categories_v3.scss";

const Categories_v3 = () => {
  const { content } = useDataContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const navMenuRef = useRef(null);
  const navLinksRef = useRef(null);

  // Methods
  function handleClick() {
    const activeState = navMenuRef.current.dataset.open;
    const STATE_REDUCER = {
      true: false,
      false: true,
    };
    navMenuRef.current.dataset.open = STATE_REDUCER[activeState];
    navLinksRef.current.hidden = !STATE_REDUCER[activeState];
    setMenuOpen(!menuOpen);
  }

  // Logo
  const Logo = () => (
    <a className="logo" href="/">
      {content.logo}
    </a>
  );
  // Links Compoenent
  const Links = () => (
    <menu
      className="nav-menu"
      ref={navMenuRef}
      // onClick={() => setMenuOpen(!menuOpen)}
      data-open={menuOpen}
    >
      <button className="hamburger-menu" onClick={() => handleClick()}></button>
      <div className="menu_links" hidden ref={navLinksRef}>
        {content.links.navigation.map(({ slug, link }, index) => (
          <a
            key={slug}
            className="link_item"
            href={link}
            aria-label={`Go to ${slug} category`}
            tabIndex={menuOpen ? "0" : "-1"}
          >
            <span>{slug}</span>
          </a>
        ))}
      </div>
    </menu>
  );

  return (
    <>
      <Logo />
      <Links />
    </>
  );
};

export default Categories_v3;
