import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <img
          src="https://images.pexels.com/photos/10569132/pexels-photo-10569132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.pexels.com/photos/12335384/pexels-photo-12335384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <a
            href="https://visitmanchester.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://images.pexels.com/photos/220887/pexels-photo-220887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <a
            href="https://visitlondon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Visit London
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
