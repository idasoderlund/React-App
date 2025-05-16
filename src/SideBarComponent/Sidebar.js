import React, { useState } from "react";

function Sidebar() {
  return (
    <aside className="asidemenu">
      <ul className="sidebarlist">
        <li>
          <a href="#bookedsessions">My Booked Sessions</a>
        </li>
        <li>
          <a href="#mystatistic">My Statistic</a>
        </li>
        <li>
          <a href="#notes">My WorkOut Notes</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
