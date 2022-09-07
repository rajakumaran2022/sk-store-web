/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid container">
        <div className="f-1 ">
          <h4>INFORMATION</h4>
          <ul>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Our Store</a>
            </li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Order History</a>
            </li>
            <li>
              <a href="">Specials Info</a>
            </li>
          </ul>
        </div>
        <div className="f-1">
          <h4>MY ACCOUNT</h4>
          <ul>
            <li>
              <a href="">My Orders</a>
            </li>
            <li>
              <a href="">My Credit</a>
            </li>
            <li>
              <a href="">My Wishlist</a>
            </li>
            <li>
              <a href="">Personal Info</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
        <div className="f-1">
          <h4>CUSTOMER</h4>
          <ul>
            <li>
              <a href="">Help and Faq</a>
            </li>
            <li>
              <a href="">Order and Returns</a>
            </li>
            <li>
              <a href="">Shipping Info</a>
            </li>
            <li>
              <a href="">Search Terms</a>
            </li>
            <li>
              <a href="">Store Location</a>
            </li>
          </ul>
        </div>
        <div className="f-1">
          <h4>INSTAGRAM</h4>
          <p>Instagram has returned invalid data.</p>
        </div>
        <div className="f-1">
          <h4>CONTACT US</h4>
          <p>PO Box CT16122 Collins Street West,Victoria 8007,Australia</p>
          <p>Phone:+1(2) 345 6789</p>
          <p>Fax:+1(2) 345 6789</p>
          <p>Email:support@sunrisetheme.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
