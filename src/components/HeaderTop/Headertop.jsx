/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HeaderTop.css";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { ImUser } from "react-icons/im";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { FiLock } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { GrGooglePlus } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="row">
        <div className="col top-left">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center">
              <span>
                <i className="call">
                  <IoIosCall />
                </i>
                (+83)1554 665 66
              </span>
            </div>
            <div className="divider">
              <p className="m-0 px-3">|</p>
            </div>
            <div className="d-flex align-items-center mail px-2">
              <span>
                <i>
                  <HiOutlineMail />
                </i>
                sk@gmail.com
              </span>
            </div>
          </div>
        </div>
        <div className="col top-right">
          <div className="d-flex align-items-center justify-content-end">
            <div id="user">
              <a href="">
                <i id="icons">
                  <ImUser />
                </i>
              </a>
              <div className="card-login">
                <form method="get" action="">
                  <div>
                    <input type="text" id="username" placeholder="username" />
                    <i id="u-hover">
                      <ImUser />
                    </i>
                  </div>
                  <div>
                    <input type="text" id="password" placeholder="password" />
                    <i id="p-hover">
                      <FiLock />
                    </i>
                  </div>
                  <div className="login-buttons">
                    <button className="register">REGISTER</button>
                    <button className="login">LOGIN</button>
                  </div>
                  <div className="connect">
                    <p>CONNECT WITH:</p>
                    <div className="login-icons">
                      <i>
                        <FaFacebookF />
                      </i>
                      <i>
                        <GrGooglePlus />
                      </i>
                      <i>
                        <GrTwitter />
                      </i>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="shopping-cart">
              <a href="">
                <i id="icons">
                  <MdOutlineShoppingCart />
                </i>
              </a>
              <div>
                <span className="cart-counter" type="counter">
                  0
                </span>
              </div>
              <div>
                <p className="cart-message">cart items empty!</p>
              </div>
            </div>
            <div className="search">
              <a href="">
                <i id="icons">
                  <ImSearch />
                </i>
              </a>
              <div className="search-input">
                <input type="text" placeholder="search here..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderTop;
