import React from "react";

function TouristInfoCard() {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/03/25/12/38/glasgow-2173449_960_720.jpg"
          alt="Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <p>Glasgow</p>
          <a
            href="https://peoplemakeglasgow.com"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/04/14/23/47/bridge-2231612_960_720.jpg"
          alt="Manchester"
          className="card-img-top"
        />
        <div className="card-body">
          <p>Manchester</p>
          <a
            href="https://www.visitmanchester.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.pixabay.com/photo/2017/06/11/18/03/big-ben-2393098_960_720.jpg"
          alt="London"
          className="card-img-top"
        />
        <div className="card-body">
          <p>London</p>
          <a
            href="https://www.visitlondon.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCard;
