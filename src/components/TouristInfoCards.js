import React from "react";
import "./TouristInfoCards.css";
import Card from "./Card";
import citiesInfo from "../data/citiesInfo.json";

const TouristInfoCards = () => (
  <div className="card-container">
    {citiesInfo.map(cityInfo => (
      <Card key={cityInfo.id} cityInfo={cityInfo} />
    ))}
  </div>
);

export default TouristInfoCards;
