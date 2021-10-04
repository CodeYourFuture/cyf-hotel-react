import React from "react";
import TouristInfoCardButton from "./TouristInfoCardButton";

// Renders tourist information cards, called by `Apps.js`.
const TouristInfoCards = props => {
  return (
    <div className="card-container d-flex justify-content-center flex-wrap">
      {props.cities.map((city, index) => (
        <div
          className="card d-flex justify-content-space-between m-5 shadow App-card-width"
          key={index}
        >
          <img
            src={city.image}
            alt={city.imageAlt}
            className="card-img-top d-flex justify-content-center"
          />
          <div className="card-body">
            <h2 className="d-flex justify-content-center">{city.name}</h2>
            <p className="d-flex justify-content-center">{city.comment}</p>
            <TouristInfoCardButton city={city} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
