import React from "react";
import ManchesterImg from "./images/Manchester-img.jpg";
import GlascowImg from "./images/Glascow-img.jpg";
import LondonImg from "./images/London-img.jpg";
const TouristInfoCards = () => {
  return (
    <div className="d-flex pt-5 justify-content-around">
      <div className="card">
        <img
          src={ManchesterImg}
          className="card-img-top img-fluid"
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <a href="http://visitmanchester.com" className="btn btn-primary">
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src={GlascowImg}
          className="card-img-top img-fluid"
          style={{ height: "200px" }}
        />
        <div className="card-body">
          <a href="http://peoplemakeglasgow.com" className="btn btn-primary">
            Go Glascow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src={LondonImg}
          className="card-img-top img-fluid"
          style={{ height: "200px" }}
        />

        <div className="card-body">
          <a href="http://visitlondon.com" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
