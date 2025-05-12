import React, { useState } from "react";

function ResponsiveNavbar() {
  
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
