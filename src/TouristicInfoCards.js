import React from "react";
import TouristicInfoCard from "./TouristicInfoCard";

const TouristicInfoCards = () => {
  return (
    <div className="touristic-cards-container">
      <TouristicInfoCard
        src={
          "https://images.pexels.com/photos/387232/pexels-photo-387232.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        link={"https://www.peoplemakeglasgow.com"}
        city={"Glasgow"}
      />

      <TouristicInfoCard
        src={
          "https://i2-prod.manchestereveningnews.co.uk/incoming/article13992478.ece/ALTERNATES/s615/Manchester-city-skyline-dusk.jpg"
        }
        link={"https://www.visitmanchester.com"}
        city={"Manchester"}
      />

      <TouristicInfoCard
        src={
          "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
        link={"https://www.visitmanchester.com"}
        city={"London"}
      />
    </div>
  );
};

export default TouristicInfoCards;
