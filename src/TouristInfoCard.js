import React from "react";

const TouristInfoCard = ({ link, imageSource, city }) => {
  return (
    <div className="card mx-auto mx-sm-1 mx-md-2 mx-lg-3">
      <img
        src={imageSource}
        alt={`City of ${city}`}
        className="card-img-top infoCardImage"
      />
      <div className="card-body d-flex justify-content-center align-items-center">
        <a href={link} className="btn btn-primary">
          Visit {city}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
