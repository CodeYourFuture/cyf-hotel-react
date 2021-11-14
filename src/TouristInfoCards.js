import React from "react";

function TouristInfoCards() {
  return (
    <div>
      <div className="card">
        <img
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          className="card-img-top"
          alt=""
        />
        <h1>Glasgow</h1>
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            peoplemakeglasgow.com
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          alt=""
          className="card-img-top"
        />
        <h1>Manchester</h1>
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            visitmanchester.com
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://image.flaticon.com/icons/svg/139/139899.svg"
          className="card-img-top"
          alt=""
        />
        <h1>London</h1>
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            visitlondon.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
