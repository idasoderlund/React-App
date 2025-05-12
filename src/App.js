import React, { useState } from "react";
import Navbar from "./NavBarComponent/Navbar";
import Sidebar from "./SideBarComponent/Sidebar";
import ResponsiveNavbar from "./NavBarComponent/NavBarResponsive";
import "./App.css";

function GymApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Exempel på koniditonell rendering

  return (
    <div
      className="app-container"
      style={{ display: "flex", minHeight: "100vh" }}
    >
      {/*Sidebar*/}
      <Sidebar />

      {/*Huvudinnehåll med navbar och innehåll*/}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/*responsiv navbar*/}
        <ResponsiveNavbar />

        {/*Navbar vanlig desktop*/}
        <Navbar />

        {/*main-innehåll*/}
        <div
          className="main-content"
          style={{
            padding: "20px",
            flex: 1,
            backgroundColor: "#EF88AD",
            borderRadius: "100px",
          }}
        >
          {/*Kan lägga in olika sektoiner om träningspass, planer statistik osv*/}

          {/*Responsiv eller conditionell rendering*/}
          {isLoggedIn ? (
            <div>
              <section>
                <h2 style={{ color: "#fff" }}>Workout Schedule</h2>
                <p style={{ color: "#fff" }}>skriv in träningsplanerna här</p>
              </section>
              <section>
                <h2 style={{ color: "#fff" }}>Statistic</h2>
                <p style={{ color: "#fff" }}>
                  Här kan jag lägga in min statistik
                </p>
              </section>
            </div>
          ) : (
            <div>
              <p>Please Sign In to see your daily content.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GymApp;
