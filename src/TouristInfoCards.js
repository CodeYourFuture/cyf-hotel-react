import React from "react";
import London from "./london.jpg";
import Manchester from "./manchester.jpeg";
import Glasgow from "./Glasgow.jpg";

const TouristInfoCards = () => {
  return (
    <div className="row">
      <div className="card">
        <img src={London} className="card-img-top" />
        <div className="card-body">
          <a href="https://visitlondon.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Manchester} className="card-img-top" />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img src={Glasgow} className="card-img-top" />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
