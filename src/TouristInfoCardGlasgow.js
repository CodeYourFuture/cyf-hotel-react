import React from "react";
import GlasgowButton from "./GlasgowButton";
import GlasgowImage from "./GlasgowImage";
import GlasgowInfo from "./GlasgowInfo";
import GlasgowTitle from "./GlasgowTitle";

const TouristInfoCardGlasgow = () => {
  return (
    <div className="card">
      <GlasgowImage />
      <div className="card-body">
        <GlasgowTitle />
        <GlasgowInfo />
        <GlasgowButton />
      </div>
    </div>
  );
};

export default TouristInfoCardGlasgow;
