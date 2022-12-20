import React from "react";
import glasgow from "../images/glasgow.jpg";
import London from "../images/London.jpeg";
import Manchester from "../images/Manchester.jpg";

function TouristInfoCards() {
  return (
    <div className="Three-city">
      <div className="card">
        <img src={glasgow} className="card-img-top" />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src={London} className="card-img-top" />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Manchester} className="card-img-top" />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
