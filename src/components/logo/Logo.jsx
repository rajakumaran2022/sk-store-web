import React from "react";
import "./Logo.css";
import logo1 from "./logo1.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.png";
import logo4 from "./logo4.png";
import logo5 from "./logo5.png";
import logo6 from "./logo6.png";

function Logo() {
  return (
    <div className="logo1">
      <div className="logo-grid container">
        <div className="logo text-muted m-5">
          <img src={logo1} alt="" />
        </div>
        <div className="logo text-muted m-5">
          <img src={logo2} alt="" />
        </div>
        <div className="logo text-muted m-5">
          <img src={logo3} alt="" />
        </div>
        <div className="logo text-muted m-5">
          <img src={logo4} alt="" />
        </div>
        <div className="logo text-muted m-5">
          <img src={logo5} alt="" />
        </div>
        <div className="logo text-muted m-5">
          <img src={logo6} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
