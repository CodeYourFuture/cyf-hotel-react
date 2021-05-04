import React from "react";
import CityCard from "./CityCard.js";

function TouristInfoCards(props) {
  const card = (
    <div className="Tourist-Cards">
      {props.cities.map(city => {
        return <CityCard key={city.name} city={city} />;
      })}
    </div>
  );
  return card;
}

export default TouristInfoCards;
