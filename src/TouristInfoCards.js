import React from "react";

const TouristInfoCards = () => {
  return (
    <div className="card-container">
      <div className="card">
        <img
          src="https://www.shutterstock.com/image-photo/glasgow-cathedral-312544904"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://peoplemakeglasgow.com/"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.shutterstock.com/image-photo/media-city-uk-on-banks-manchester-526565734"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://www.visitmanchester.com/"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://www.shutterstock.com/image-photo/london-night-urban-architectures-tower-bridge-223809409"
          className="card-img-top"
        />
        <div className="card-body">
          <a
            href="https://visitlondon.com"
            target="_blank"
            className="btn btn-primary"
            rel="noopener noreferrer"
          >
            London
          </a>
        </div>
      </div>
    </div>
  );
};
export default TouristInfoCards;
