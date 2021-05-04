import React from "react";
import {CityCards} from "./components";

const TouristInfoCards = () => {
  return (
    <div className="card">
      {CityCards.map((city, index) => (
          <img
          src={city.img.src}
          className={city.img.className}
          alt={city.img.alt}
        />
        <div className="card-body" key={index}>          
          <a href={city.link} className="btn btn-primary">
            {city.city}
          </a>
        </div>
      ))}
    </div>
  );
};


export default TouristInfoCards ;