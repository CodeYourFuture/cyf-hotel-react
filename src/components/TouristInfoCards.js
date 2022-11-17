import React from "react";
import cities from "../data/cities.json";

const TouristInfoCards = () => {
  return (
    <div className="cards-container">
      {cities.map((city, index) => {
        return (
          <div className="card" key={index}>
            <div className="card__title">{city.name}</div>
            <img className="card__img" src={city.image} alt={city.name} />
            <div className="card__text">{city.description}</div>
            <div className="card__footer">
              <a className="card__link" href={city.link}>
                More information
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
