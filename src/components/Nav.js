import React, { useState, useEffect } from "react";
import logo from "../images/logo/logo.png";
import NavLinks from "./NavLinks";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [displayMenu, setDisplayMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nav">
      <div className="container">
        <div className="grid-2">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          {width > 992 && <NavLinks />}
          {width <= 992 && (
            <div className="small-menu">
              <span
                className="menu-btn"
                onClick={() => setDisplayMenu(!displayMenu)}
              >
                <span></span>
                <span></span>
                <span></span>
              </span>
              {displayMenu && <NavLinks />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
