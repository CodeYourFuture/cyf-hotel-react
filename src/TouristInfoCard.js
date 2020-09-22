import React from "react";

const TouristInfoCard = ({ link, city }) => {
  return (
    <div className="card">
      <img src={link} alt={`City of ${city}`} className="card-img-top" />
      <div className="card-body">
        <a href="https://peoplemakeglasgow.com" className="btn btn-primary">
          Visit {city}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
