import React from "react";

const TouristInfoCards = props => {
  return (
    <div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="https://visitmanchester.com" className="btn btn-primary">
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="https://visitlondon.com" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
