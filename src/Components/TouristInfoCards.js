import Cities from "../data/cities.json";
import React from "react";
import Card from "./Card.js";

function TouristInfoCards() {
  return (
    <div className="album py-5">
      <div className="container">
        <div className="row">
          {Cities.map((city, index) => {
            return <Card city={city} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
