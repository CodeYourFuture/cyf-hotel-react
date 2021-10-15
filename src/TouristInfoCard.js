import React from "react";
const TouristInfoCard = ({ cityName, imageUrl, description, href }) => {
  return (
    <div className="tourist-info-card mb-3">
      <a
        className="tourist-info-card-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-anchor" />
      </a>
      <h2 className="tourist-info-card-title">{cityName}</h2>
      <img className="tourist-info-card-image" src={imageUrl} alt="city-pic" />
      <p className="tourist-info-card-description mb-3">{description}</p>
    </div>
  );
};
export default TouristInfoCard;
