/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./FooterNav.css";
import logofooter from "./logofooter.png";
import link1 from "./link1.png";
import link2 from "./link2.png";
import link3 from "./link3.png";
import link4 from "./link4.png";
import link5 from "./link5.png";

function FooterNav() {
  return (
    <div className="footer-nav">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={logofooter} alt="" />
            <small className="text-muted px-3">
              SK STORE-WORDPRESSTHEME @ 2022 BY
            </small>
          </div>
          <div className="col">
            <div className="dflex f-right">
              <a className="m-1" href="">
                <img src={link1} alt="" />
              </a>
              <a className="m-1" href="">
                <img src={link2} alt="" />
              </a>
              <a className="m-1" href="">
                <img src={link3} alt="" />
              </a>
              <a className="m-1" href="">
                <img src={link4} alt="" />
              </a>
              <a className="m-1" href="">
                <img src={link5} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNav;
