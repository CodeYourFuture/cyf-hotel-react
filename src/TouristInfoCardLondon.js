import React from "react";
import LondonButton from "./LondonButton";
import LondonImage from "./LondonImage";
import LondonInfo from "./LondonInfo";
import LondonTitle from "./LondonTitle";

const TouristInfoCardLondon = () => {
  return (
    <div className="card">
      <LondonImage />
      <div className="card-body">
        <LondonTitle />
        <LondonInfo />
        <LondonButton />
      </div>
    </div>
  );
};

export default TouristInfoCardLondon;
