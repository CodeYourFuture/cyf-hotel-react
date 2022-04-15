import React from "react";
import Cities from "../data/cities.json";

const TouristInfoCards = () => (
  <div className="card-deck p-5">
    {Cities.map((city, index) => (
      <div key={index} className="card">
        <>
          <img src={city.image} alt={city.imageDesc} className="card-img-top" />
          <div className="card-body d-flex flex-column justify-content-between">
            <p className="card-text">{city.description}</p>
            <div className="align-self-end">
              <a href={city.link} className="btn btn-secondary" target="window">
                More Information
              </a>
            </div>
          </div>
        </>
      </div>
    ))}
  </div>
);

export default TouristInfoCards;
