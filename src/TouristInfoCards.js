import React from "react";
import "./App.css";

const TouristInfoCards = () => {
  return (
    <div className="CardGroup">
      <div className="card">
        <img
          src="https://www.shoosmiths.co.uk/-/media/images/locations/glasgow.jpg"
          alt=""
          className="card-img"
        />
        <div className="class-body">
          <h4>GLASGOW</h4>
          <p>This is the beautiful city of Glasgow</p>
          <a href="https://peoplemakeglasgow.com/" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://i.redd.it/s5ifau44bvd31.jpg"
          alt=""
          className="card-img"
        />
        <div className="class-body">
          <h4>MANCHESTER</h4>
          <p>
            This is the dazzling Skyline of the football loving city of
            Manchester
          </p>
          <a
            href="https://www.visitmanchester.com/"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://www.fodors.com/assets/destinations/2869/tower-bridge-london-england_980x650.jpg"
          alt=""
          className="card-img"
        />
        <div className="class-body">
          <h4>London</h4>
          <p>This is the beautiful city of Glasgow</p>
          <a href="https://www.visitlondon.com/" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
