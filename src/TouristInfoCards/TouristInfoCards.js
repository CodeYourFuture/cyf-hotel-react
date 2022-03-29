import React from "react";

import TouristInfoCard from "./TouristInfoCard/TouristInfoCard";

import Cities from "../data/Cities";

import "./TouristInfoCards.css";

const TouristInfoCards = () => {
  return (
    <div className="tourist-info-cards">
      {Cities.map(city => {
        return (
          <TouristInfoCard
            cityName={city.name}
            cityDescription={city.description}
            image={city.img}
            alt={city.imgAlt}
            link={city.link}
            key={city.id}
          />
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
