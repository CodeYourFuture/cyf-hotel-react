import React from "react";
import Glasgow from "./Glasgow.jpg";
import Manchester from "./Manchester.jpg";
import London from "./London.jpg";

const TouristInfoCards = () => {
  return (
    <div>
      <div className="card">
        <img src={Glasgow} className="card-img-top" />
        <div className="card-body">
          <a
            href="http://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Manchester} className="card-img-top" />
        <div className="card-body">
          <a href="http://www.visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img src={London} className="card-img-top" />
        <div className="card-body">
          <a href="http://www.visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
