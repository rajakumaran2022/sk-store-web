import React from "react";
import { BsFullscreenExit } from "react-icons/bs";
import "./PopularProduct.css";

function PopularProduct() {
  return (
    <div>
      <div className="f-header py-5 text-center">
        <i>
          <BsFullscreenExit />
        </i>
        <h5 className="py-3">
          POPULAR <span>PRODUCT</span>
        </h5>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit
          qui, odit quam eveniet modi ad voluptatibus similique neque vero.
        </p>
      </div>
      <div className="icons-filter text-center">
        <div className="text-muted">
          <span>BIKE .</span>
          <span>MEN .</span>
          <span>WOMEN .</span>
          <span>COMPONENTS .</span>
          <span>ACCESSORIES .</span>
        </div>
      </div>
    </div>
  );
}

export default PopularProduct;
