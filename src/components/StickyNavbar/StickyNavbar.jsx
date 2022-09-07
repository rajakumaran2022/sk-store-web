/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./StickyNavbar.css";
import logo from "../HeaderBanner/img/logo.png";
import { IoIosArrowForward } from "react-icons/io";

function StickyNavbar() {
  const [navbar, setNavbar] = useState(false);

  const displayNavbar = () => {
    if (window.scrollY >= 1050) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", displayNavbar);

  return (
    <div id="body" className={navbar ? "navbar active" : "navbar"}>
      <div className="container-fixed text-center">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
        </button>
        <div className="">
          <ul className="nav-link d-flex align-items-center">
            <li  className="">
              <a href="">HOME</a>
            </li>
            <li className="">
              <a href="">ABOUT</a>
            </li>
            <li className="">
              <a href="">SHOP</a>
            </li>
            <li className="sk">
              <a href="">
                <img id="nav-img" src={logo} alt="" />
              </a>
            </li>
            <li className="">
              <a href="">FEATURES</a>
            </li>
            <li className="">
              <a href="">BLOG</a>
            </li>
            <button className="btn-purchase">
              PURCHASE
              <i className="px-3">
                <IoIosArrowForward />
              </i>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default StickyNavbar;
