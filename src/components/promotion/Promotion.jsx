import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./Promotion.css";

function Promotion() {
  return (
    <div className="promotion">
      <div className="pro-content container">
        <h3>PROMOTION SALE OFF 45%</h3>
        <p>
          Let's celebrate! Save up to 45% on selecting mountain bikes, climbing
          helmets, mens ventraili shoes and a lot of other things during our
          Summer Holiday Sale now through May 30th. You can choose any product
          you really want to receive the sale price from our store. Dont
          hesitate, lets grasp now!
        </p>
        <button className="banner-button">
          VIEW SHOP NOW
          <span className="px-2 arrow">
            <IoIosArrowForward />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Promotion;
