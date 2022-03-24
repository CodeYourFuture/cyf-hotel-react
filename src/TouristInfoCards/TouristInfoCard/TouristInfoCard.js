import React from "react";

const TouristInfoCard = props => {
  return (
    <div className="card">
      <img src={props.image} alt={props.alt} className="card-image-top" />
      <div className="card-body">
        <h2>{props.cityName}</h2>
        <p>{props.cityDescription}</p>
        <a
          href={props.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
