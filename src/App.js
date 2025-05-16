import React, { useState } from "react";
import Navbar from "./NavBarComponent/Navbar";
import Sidebar from "./SideBarComponent/Sidebar";
import "./App.css";
import "./NavBarComponent/NavBar.css";

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
        <Navbar />

        {/*main-innehåll*/}
        <div
          className="main-content"
          style={{
            padding: "20px",
            flex: 1,
            backgroundColor: "#ffdbdb",
            borderRadius: "100px",
          }}
        >
          {/*Kan lägga in olika sektoiner om träningspass, planer statistik osv*/}

          {/*Responsiv eller conditionell rendering*/}
          {isLoggedIn ? (
            <div>
              <section className="centeredcontent">
                <h1
                  style={{
                    color: "#4f1c51",
                    fontFamily: "Parisienne",
                    fontSize: "2.5em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    flexWrap: "wrap",
                  }}
                >
                  Sometimes a good workout is all the therapy you need!
                </h1>
              </section>
              <section className="centeredcontent">
                <h2
                  style={{
                    color: "#4f1c51",
                    fontFamily: "Shadows Into Light",
                    textDecoration: "underline",
                    flexWrap: "wrap",
                  }}
                >
                  Workout Schedule:
                </h2>
                <p
                  style={{
                    color: "#4f1c51",
                  }}
                >
                  <b>Monday:</b> Full leg day | <b>Tuesday:</b> Back/Shoulders
                  Workout | <b>Wednesday:</b> Full leg day <br /> <br />
                  <b>Thursday:</b> Restday! | <b>Friday:</b> Arm/Ab Workout |
                  <b>Saturday:</b> Full leg day | <b>Sunday:</b> Restday!
                </p>
              </section>
              <section className="centeredcontent">
                <h2
                  style={{
                    color: "#4f1c51",
                    fontFamily: "Shadows Into Light",
                    textDecoration: "underline",
                    flexWrap: "wrap",
                  }}
                >
                  Calorie Calculation:
                </h2>
                <p id="calorieparagraph" style={{ color: "#4f1c51" }}>
                  <b>Daily Calories:</b> 2100 | <b>Daily Proteine Intake:</b>{" "}
                  158g | <b>Current Deficit/Surplus:</b> +300 Kcal Surplus
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
