import React from "react";
import "./New.css";

function New({ list }) {
  return (
    <div className="new-card">
      <div className="new-content">
        <img src={list.image} alt="" />
        <p className="text-muted">{list.name}</p>
        <p className="text-muted">
          {list.priceTit}
          <span>{list.price$}</span>
        </p>
      </div>
      <div className="new-overlay">
        <i className="shopping">{list.iconshopping}</i>
        <span className="divider">|</span>
        <i className="like">{list.iconlike}</i>
        <span className="divider">|</span>
        <i className="eye">{list.iconeye}</i>
      </div>
    </div>
  );
}

export default New;
