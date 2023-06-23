import React from "react";
import hotelsinfo from "./data/hotelsinfo.json";

const TouristInfoCards = () => {
  return (
    <div className="card">
      {hotelsinfo.map((city, index) => (
        <div key={index} className="infoCard">
          <img src={city.imgUrl} className="card-img-top" alt="" />
          <h2>{city.cityName}</h2>
          <p>{city.info}</p>
          <div className="card-body">
            <a href={city.moreInfo} className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
