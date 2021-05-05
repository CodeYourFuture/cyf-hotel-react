import React from "react";
import ManchesterButton from "./ManchesterButton";
import ManchesterImage from "./ManchesterImage";
import ManchesterInfo from "./ManchesterInfo";
import ManchesterTitle from "./ManchesterTitle";

const TouristInfoCardManchester = () => {
  return (
    <div className="card">
      <ManchesterImage />
      <div className="card-body">
        <ManchesterTitle />
        <ManchesterInfo />
        <ManchesterButton />
      </div>
    </div>
  );
};

export default TouristInfoCardManchester;
