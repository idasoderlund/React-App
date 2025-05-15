import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/*loga eller titel*/}
      <div className="applogo">Master Gym App</div>
      {/*Hamburgemeny för mobila enheter*/}
      <div
        className="responsiveMenu"
        onClick={toggleMobileMenu}
        aria-label="toggle menu"
        aria-expanded={isMobileMenuOpen}
        role="button"
      >
        {/*Hamburgerstreck*/}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/*länkar*/}

      <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <a href="#home">Homepage</a>
        <a href="#myprofile">My profile</a>
        <a href="#settings">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
