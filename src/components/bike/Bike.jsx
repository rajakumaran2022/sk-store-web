import React from "react";
import "./Bike.css";

function Bike({ list }) {
  return (
    <div className="card-product">
      <div className="card-content">
        <div>
          <img className="img-fluid" src={list.image} alt="" />
        </div>
        <p className="m-0 text-muted">{list.name}</p>
        <p className="text-muted">
          {list.priceTit}
          <span>{list.price$}</span>
        </p>
      </div>
      <div className="card-overlay">
        <div className="d-flex align-items-center justify-content-center">
          <i className="addToCart">{list.iconAddTo}</i>
          <span className="divider">|</span>
          <i className="watchingList">{list.iconWatching}</i>
        </div>
      </div>
    </div>
  );
}

export default Bike;
