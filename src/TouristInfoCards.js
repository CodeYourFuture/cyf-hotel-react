import React from "react";

function TouristInfoCards() {
  return (
    <div className="TouristInfoCards">
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
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img src="..." className="card-img-top" />
        <div className="card-body">
          <a href="https://www.visitlondon.com/#" className="btn btn-primary">
            London
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
