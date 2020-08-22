import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="cards-wrapper">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?&w=400&q=50"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow</h5>
          <p className="card-text">Visit Glasgow!</p>
          <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
            https://peoplemakeglasgow.com
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?&w=400&q=50"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester</h5>
          <p className="card-text">Visit Manchester!</p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            https://visitmanchester.com
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?&w=400&q=50"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <h5 className="card-title">London</h5>
          <p className="card-text">Visit London!</p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            https://visitlondon.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
