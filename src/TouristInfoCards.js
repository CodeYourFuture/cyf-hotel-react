import React from "react";
import cities from "./data/cities.json";

const TouristInfoCards = () => {
  return (
    <div className="cards-container">
      {cities.map((city, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-header">
              <h5 className="card-title">{city.name}</h5>
            </div>
            <div className="card-body">
              <img className="card-img-top" src={city.image} alt={city.name} />
              <p className="card-text">{city.description}</p>
              <a className="btn btn-primary more-btn" href={city.link}>
                More info
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
