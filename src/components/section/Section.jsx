import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import "./section.css";
function Section() {
  return (
    <div id="section">
      <div className="row container m-auto">
        <div className="col-md-4 section">
          <div className="d-flex align-items-center">
            <div className="section-icon">
              <FaShippingFast />
            </div>
            <div className="px-3">
              <h5>FREE SHIP ALL ORDER</h5>
              <p className="text-muted">
                Go ahead and get the item you really want to enjoy
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 section">
          <div className="d-flex align-items-center">
            <div className="section-icon">
              <FaRetweet />
            </div>
            <div className="px-3">
              <h5>100% MONEY BACK</h5>
              <p className="text-muted">
                You may return the item within 30 days delivery
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 section">
          <div className="d-flex align-items-center">
            <div className="section-icon">
              <BiSupport />
            </div>
            <div className="px-3">
              <h5>24/7 SUPPORT</h5>
              <p className="text-muted">
                We are ready to open 24hours a day, 7days a week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Section;
