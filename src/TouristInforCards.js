import React from "react";
import { useState } from "react";
import TourCard from "./TourCard";
export default function TouristInfoCards({ cityInfo }) {
  return (
    <div className="cards-container">
      {cityInfo.map((city, index) => (
        // const { city, link, image, name, description} = cityInfo
        <TourCard city={city} key={index} />
      ))}
    </div>
  );
}
