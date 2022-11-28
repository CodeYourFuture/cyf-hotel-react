import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img className="card-img-top" src="/images/glasgow.jpg" alt="Glasgow" />
        <div className="card-body">
          <a className="btn btn-primary" href="https://peoplemakeglasgow.com">
            Glasgow
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="/images/manchester.jpg" alt="" />
        <div className="card-body">
          <a className="btn btn-primary" href="https://visitmanchester.com">
            Manchester
          </a>
        </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="/images/london.jpg" alt="" />
        <div className="card-body">
          <a className="btn btn-primary" href="https://visitlondon.com">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
