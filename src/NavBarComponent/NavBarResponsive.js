import React, { useState } from "react";

function ResponsiveNavbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#A53860",
        padding: "10px",
        position: "relative",
      }}
    >
      {/*Logga eller titel*/}
      <div
        style={{
          color: "#fff",
        }}
      >
        Master Gym App
      </div>

      {/*Hamburgemeny för mobila enheter*/}
      <div
        className={`responsiveMenu ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
        style={{
          cursor: "pointer",
          display: "none",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "25px",
          height: "20px",
        }}
      >
        {/*Hamburgerstreck*/}
        <div
          style={{ height: "3px", background: "#fff", margin: "2px 0" }}
        ></div>
        <div
          style={{ height: "3px", background: "#fff", margin: "2px 0" }}
        ></div>
        <div
          style={{ height: "3px", background: "#fff", margin: "2px 0" }}
        ></div>
      </div>

      {/*Navigationslänkarna*/}
      <div
        className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}
        style={{ display: "flex", gap: "10px" }}
      >
        <a href="#home" style={{ color: "#fff" }}>
          Homepage
        </a>
        <a href="#myprofile" style={{ color: "#fff" }}>
          My profile
        </a>

        <a href="#settings" style={{ color: "#fff" }}>
          Settings
        </a>
      </div>
    </nav>
  );
}

export default ResponsiveNavbar;
