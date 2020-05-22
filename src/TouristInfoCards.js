import React from "react";
import Card from "./Card.js";
function TouristInfoCards(props) {
  return (
    <div className="cardsBlock">
      {props.cities.map((city, index) => (
        <Card city={city} key={index} />
      ))}
    </div>
  );
}
export default TouristInfoCards;
