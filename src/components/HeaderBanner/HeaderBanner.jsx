
import React from "react";
import "./HeaderBanner.css";
import logo from "./img/logo.png";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGooglePlusSquare } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import post from "./img/post.jpg";

function HeaderBanner() {
  return (
    <div className="header-banner">
      <div className="banner-content d-flex flex-column align-items-end">
        <h1>BEST 2022</h1>
        <h2>MOUNTAIN BIKES</h2>
        <button className="banner-button">
          VIEW SHOP NOW
          <span className="px-2 arrow">
            <IoIosArrowForward />
          </span>
        </button>
      </div>
      <div className="slider container d-flex flex-column">
        <div className="slider-img">
          <img src={logo} alt="" />
        </div>
        <div className="toggle-nav">
          <ul className="nav-links m-0 p-0">
            <div id="home" className="nav-item">
              <a href="">
                <li>HOME</li>
              </a>
              <div className="h-home">
                <a href="">
                  <li>HomePage 1</li>
                </a>
                <a href="">
                  <li>HomePage 2</li>
                </a>
                <a href="">
                  <li>HomePage 3</li>
                </a>
                <a href="">
                  <li>HomePage 4</li>
                </a>
              </div>
            </div>
            <div className="nav-item">
              <a href="">
                <li>ABOUT</li>
              </a>
            </div>
            <div id="shop" className="nav-item">
              <a href="">
                <li>SHOP</li>
              </a>
              <div
                id="h-shop"
                className="d-flex align-items-center d-none justify-content-center "
              >
                <div className="px-5">
                  <div>
                    <h3>SHOW CASE</h3>
                    <hr />
                  </div>
                  <a href="">
                    <li>HomePage 1</li>
                  </a>
                  <a href="">
                    <li>HomePage 2</li>
                  </a>
                  <a href="">
                    <li>HomePage 3</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                </div>
                <div className="px-5">
                  <div>
                    <h3>SHOW CASE</h3>
                    <hr />
                  </div>
                  <a href="">
                    <li>HomePage 1</li>
                  </a>
                  <a href="">
                    <li>HomePage 2</li>
                  </a>
                  <a href="">
                    <li>HomePage 3</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                </div>
                <div className="px-5">
                  <div>
                    <h3>SHOW CASE</h3>
                    <hr />
                  </div>
                  <a href="">
                    <li>HomePage 1</li>
                  </a>
                  <a href="">
                    <li>HomePage 2</li>
                  </a>
                  <a href="">
                    <li>HomePage 3</li>
                  </a>
                  <a href="">
                    <li>HomePage 4</li>
                  </a>
                </div>
                <div className="h-img">
                  <img src={post} alt="" />
                </div>
              </div>
            </div>
            <div className="nav-item">
              <a href="">
                <li>FEATURES</li>
              </a>
            </div>
            <div className="nav-item">
              <a href="">
                <li>BLOG</li>
              </a>
            </div>
          </ul>
        </div>
        <div id="nav-item" className="nav-item d-flex align-items-center">
          <a href="">
            <li>
              PURCHASE
              <span className="px-2 arrow">
                <IoIosArrowForward />
              </span>
            </li>
          </a>
        </div>
        <div id="slider-footer" className="nav-item">
          <div id="sf-link" className="d-flex align-items-center">
            <a href="">
              <FaTwitterSquare />
              <span className="px-2">Twitter</span>
            </a>
          </div>
          <div id="sf-link" className="d-flex align-items-center">
            <a href="">
              <FaFacebookSquare />
              <span className="px-2">Facebook</span>
            </a>
          </div>
          <div id="sf-link" className="d-flex align-items-center">
            <a href="">
              <FaLinkedin />
              <span className="px-2">Linkedin</span>
            </a>
          </div>
          <div id="sf-link" className="d-flex align-items-center">
            <a href="">
              <AiFillGooglePlusSquare />
              <span className="px-2">Googleplus</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
