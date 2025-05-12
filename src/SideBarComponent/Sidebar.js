import React from "react";

function Sidebar() {
  return (
    <aside
      style={{
        width: "200px",
        backgroundColor: "#A53860",
        padding: "10px",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "50px",
      }}
    >
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <a
            href="#workoutschedule"
            style={{ display: "block", color: "#fff", margin: "40px 20px" }}
          >
            My Workout Schedule
          </a>
        </li>
        <li>
          <a
            href="#mystatistic"
            style={{ display: "block", color: "#fff", margin: "40px  20px" }}
          >
            My Statistic
          </a>
        </li>
        <li>
          <a
            href="#notes"
            style={{ display: "block", color: "#fff", margin: "40px 20px" }}
          >
            My WorkOut Notes
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
