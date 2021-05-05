import React from "react";
import TouristInfoCardGlasgow from "./TouristInfoCardGlasgow";
import TouristInfoCardLondon from "./TouristInfoCardLondon";
import TouristInfoCardManchester from "./TouristInfoCardManchester";
// import picture from "pic.jpeg";

const TouristInfoCards = () => {
  return (
    <div className="card-container text-center">
      <TouristInfoCardLondon />
      <TouristInfoCardGlasgow />
      <TouristInfoCardManchester />
    </div>
  );
};
export default TouristInfoCards;
