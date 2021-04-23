/* eslint-disable indent*/

import React from "react";

function TouristInfoCards() {
  return (
    <div>
      {/* London */}
      <div className="card">
        <img
          src={require("./images/london.jpg")}
          alt="london big ben"
          className="card-img-top"
        />
        <h1>London </h1>
        <div className="card-body">
          <a href="https://www.visitlondon.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      {/* Manchester */}
      <div className="card">
        <img
          src={require("./images/manchester.jpg")}
          alt="Manchester"
          className="card-img-top"
        />
        <h1>Manchester </h1>
        <div className="card-body">
          <a href="https://www.visitmanchester.com" className="btn btn-primary">
            More Information
          </a>
        </div>
      </div>
      {/*Glasgow  */}
      <div className="card">
        <img
          src={require("./images/glasgow.jpg")}
          alt="Glasgow"
          className="card-img-top"
        />
        <h1>Glasgow </h1>
        <div className="card-body">
          <a
            href="https://www.peoplemakeglasgow.com"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
