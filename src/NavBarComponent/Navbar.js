import React from "React";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "15px",
        backgroundColor: "#eee",
        padding: "10px",
      }}
    >
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact Us</a>
    </nav>
  );
}

export default Navbar;
