import React from "react";
import "./Products.css";

export default function Products({ list }) {
  return (
    <div className="card">
      <div className="card-items">
        <img className="img-fluid" src={list.img} alt="" />
        <p className="text-muted">{list.title}</p>
        <p className="text-muted">
          {list.priceTitle}
          <span>{list.price}</span>
        </p>
      </div>
      <div className="overlay">
        <div className="d-flex">
          <button className="addCart">
            <i>{list.iconAdd}</i>
          </button>
          <button className="watchList">
            <i>{list.iconWatch}</i>
          </button>
        </div>
      </div>
    </div>
  );
}
