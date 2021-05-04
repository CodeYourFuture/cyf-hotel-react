import React from "react";

const OneInfoCard = ({ cityName, imgSrc, url }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={imgSrc} alt={cityName} />
      <div className="card-body">
        <a href={url} className="btn btn-primary">
          {cityName}
        </a>
      </div>
    </div>
  );
};

export default OneInfoCard;
