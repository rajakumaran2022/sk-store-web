import React from "react";
import "./NewFull.css";
import newfull from "./newfull.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function NewFull() {
  return (
    <div className="newfull-card">
      <div className="newfull-content">
        <img src={newfull} alt="" />
        <p className="text-muted">SK Charge Bikes CJ</p>
        <p className="text-muted">
          Price:
          <span>$699</span>
        </p>
      </div>
      <div className="newfull-overlay">
        <i className="newshopping">
          <AiOutlineShoppingCart />
        </i>
        <span className="divider">|</span>
        <i className="newlike">
          <AiOutlineHeart />
        </i>
        <span className="divider">|</span>
        <i className="neweye">
          <AiFillEye />
        </i>
      </div>
    </div>
  );
}

export default NewFull;
