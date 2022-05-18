import React from "react";
import cardsData from "./data/cardInfo.json";
import Card from "./Card";

const TouristInfoCards = () => {
  return (
    <div className=" mt-2 cards-wrapper d-flex flex-row justify-content-around  ">
      {cardsData.map((card, index) => {
        return <Card key={index} data={card} />;
      })}
    </div>
  );
};

export default TouristInfoCards;
