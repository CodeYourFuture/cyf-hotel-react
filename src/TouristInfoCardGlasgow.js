import React from "react";
import GlasgowButton from "./GlasgowButton";
import GlasgowImage from "./GlasgowImage";
import GlasgowInfo from "./GlasgowInfo";
import Title from "./components/Title";

const TouristInfoCardGlasgow = () => {
  return (
    <div className="card">
      <GlasgowImage />
      <div className="card-body">
        <Title cityName="London" />
        <GlasgowInfo />
        <GlasgowButton />
      </div>
    </div>
  );
};

export default TouristInfoCardGlasgow;
