import React from "react";
import "./Blogs.css";
import photo1 from "./photo1.jpg";
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import photo4 from "./photo4.jpg";

function Blogs() {
  return (
    <div className="" id="blogs">
      <div className="container">
        <div className="row">
          <div className="col-md-4 bg-img hover-zoom one m-0 p-0">
            <img src={photo1} alt=" " />
          </div>
          <div className="col-md-4 two m-0 p-0">
            <div className="d-flex flex-column">
              <img src={photo2} alt=" " />
            </div>
            <div className="col-md-4 three m-0 p-0">
              <img src={photo3} alt=" " />
            </div>
          </div>
          <div className="col-md-4 four m-0 p-0">
            <img src={photo4} alt=" " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
