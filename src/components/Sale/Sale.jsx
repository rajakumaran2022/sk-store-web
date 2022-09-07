import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Sale.css";

function Sale() {
  return (
    <div className="section-sale">
      <div className="row">
        <div className="col-md-6 sale-img">
          <div className="container-fluid sale-content">
            <h5>BIKE AND ACCESSORIES</h5>
            <h3>
              SALE UP<span>45%</span>
            </h3>
            <button className="banner-button">
              VIEW SHOP NOW
              <i className="arrow">
                <IoIosArrowForward />
              </i>
            </button>
          </div>
        </div>
        <div className="col-md-6 sale-img-1">
          <div className="sale-content-1 text-start">
            <h4>WOMEN JACKET</h4>
            <h3>
              SALE UP<p>45%</p>
            </h3>
            <ul className="p-0 my-4">
              <li>Premium Light Denim</li>
              <li>Machine Wash Gold</li>
              <li>100% cotton</li>
              <li>Made in Turkey</li>
            </ul>
            <button className="banner-button">
              VIEW SHOP NOW
              <i className="arrow">
                <IoIosArrowForward />
              </i>
            </button>
          </div>
        </div>
      </div>
      <div className="design">
        <p>DEAL OF THE DAY, UPTO 50%</p>
      </div>
    </div>
  );
}

export default Sale;
