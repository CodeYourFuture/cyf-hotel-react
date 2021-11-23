import React from "react";
import { touristInfoData } from "./TouristInfoData";
const TouristInfoCards = () => {
  return touristInfoData.map(touristInfo => {
    return (
      <div className="card">
        <img src={touristInfo.src} className="card-img-top" alt="" />
        <div className="card-body">
          <h5>{touristInfo.cityName}</h5>
          <h6>{touristInfo.cityInfo}</h6>
          <a href={touristInfo.href} className="btn btn-primary">
            {touristInfo.buttonText}
          </a>
        </div>
      </div>
    );
  });
};

export default TouristInfoCards;
