import React from "react";
const TouristInfoCard = ({ cityName, imageUrl, description, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="tourist-info-card">
        <h2>{cityName}</h2>
        <img src={imageUrl} alt="city-pic" />
        <p>{description}</p>
      </div>
    </a>
  );
};
export default TouristInfoCard;
