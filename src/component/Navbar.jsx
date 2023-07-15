import React from "react";

import { BatteryFull, SignalCelluar, SignalWifi } from "../static";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="time">
        <span>10:00</span>
      </div>

      <div className="icons">
        <div className="icon">
          <img src={SignalCelluar} alt="" />
        </div>
        <div className="icon">
          <img src={SignalWifi} alt="" />
        </div>
        <div className="icon">
          <img src={BatteryFull} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
