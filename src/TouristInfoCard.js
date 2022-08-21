import React from "react";

const TouristInfoCard = props => {
  return (
    <div className="tourist-info-card">
      <img
        src={`../images/${props.image}`}
        className="tourist-info-card-image"
      />
      <h2 className="tourist-info-card-title">{props.title}</h2>
      <p className="tourist-info-card-description">{props.description}</p>
      <a href={props.link} target="_blank" className="tourist-info-card-link">
        More Information
      </a>
    </div>
  );
};

export default TouristInfoCard;
