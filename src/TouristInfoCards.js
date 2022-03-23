import React from "react";

function TouristInfoCard() {
  return (
    <div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/25/12/38/glasgow-2173449_960_720.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/14/23/47/bridge-2231612_960_720.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_960_720.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCard;
