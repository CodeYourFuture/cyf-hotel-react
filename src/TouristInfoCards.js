import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="tourist-info-cards d-flex justify-content-around">
      <div className="card">
        <img className="card-img-top" src="./images/glasgow.jpg" alt="" />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="./images/manchester.jpeg" alt="" />
        <div className="card-body">
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="./images/london.jpg" alt="" />
        <div className="card-body">
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
