import React from "react";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "15px",
        backgroundColor: "#A53860",
        padding: "10px",
      }}
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
    </nav>
  );
}

export default Navbar;
