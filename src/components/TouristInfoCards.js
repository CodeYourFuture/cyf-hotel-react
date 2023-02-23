import React from "react";

export default function TouristInfoCards() {
  return (
    <div className="cont-card">
      <div className="card">
        <img
          src="https://wallpaperaccess.com/full/2153919.jpg"
          alt="Glasgow"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://wallpaperaccess.com/full/4546317.jpg"
          alt="Manchester"
          className="card-img-top"
        />
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
        <img
          src="https://wallpaperaccess.com/full/172520.jpg"
          alt="London"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
