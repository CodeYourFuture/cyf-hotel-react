import React from "react";
import CitiesInfo from "./CitiesInfo.json";
import "./Cards.css";

const TouristInfoCards = () => {
  return (
    <div className="wrapper">
      {CitiesInfo.map(cityInfo => {
        return (
          <div className="card" key={cityInfo.id}>
            <h2>{cityInfo.cityName}</h2>
            <img src={cityInfo.imageUrl} className="card-img-top" />
            <div className="card-body">
              <p>{cityInfo.summary}</p>
              <a href="#" className="btn btn-primary">
                Go to {cityInfo.cityName}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
