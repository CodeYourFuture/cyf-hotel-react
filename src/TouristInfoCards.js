import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards">
      <div className="card">
        <img src="/images/glasgow.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img src="/images/manchester.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Go Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img src="/images/london.jpg" className="card-img-top" alt="" />
        <div className="card-body">
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Go London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
