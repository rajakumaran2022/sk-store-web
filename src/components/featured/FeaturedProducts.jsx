import React from "react";
import './FeaturedProduct.css'
import {BsFullscreenExit} from 'react-icons/bs'
function FeaturedProducts() {
  return (
    <div>
      <div className="f-header py-5 text-center">
        <i><BsFullscreenExit/></i>
        <h5 className="py-3">
          FEATURED <span>PRODUCT</span>
        </h5>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque velit
          qui, odit quam eveniet.
        </p>
      </div>
    </div>
  );
}
export default FeaturedProducts;
