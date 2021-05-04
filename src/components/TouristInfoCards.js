import React from "react";
import Card from "./Card";
import Information from "./data/information.json";

const TouristInfoCards = () => (
  <div className="container">
    {Information.map((data, index) => {
      return <Card key={index} cardInfo={data} />;
    })}
  </div>
);

export default TouristInfoCards;
