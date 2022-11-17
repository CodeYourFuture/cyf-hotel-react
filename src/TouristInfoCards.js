import React from "react";
import LondonImage from "./LondonImage";

function TouristInfoCards() {
  return (
    <div className="TouristInfoCards">
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <h4>Glasgow</h4>
          <p>BLAH BLAh blah blah blah</p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Find out more
          </a>
        </div>
      </div>
      <div className="card">
        <LondonImage className="card-img-top" />
        <div className="card-body">
          <h4>Manchester</h4>
          <p>BLAH BLAh blah blah blah</p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Find out more
          </a>
        </div>
      </div>
      <div className="card">
        <img src="./london.jpeg" className="card-img-top" />
        <div className="card-body">
          <h4>London</h4>
          <p>BLAH BLAh blah blah blah</p>
          <a href="https://www.visitlondon.com/#" className="btn btn-primary">
            Find out more
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
