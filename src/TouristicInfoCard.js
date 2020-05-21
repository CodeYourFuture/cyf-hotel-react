import React from "react";

const TouristicInfoCard = props => (
  <div className="card">
    <h2>{props.cityName}</h2>
    <img src={props.src} className="card-img-top" alt={props.cityImage} />
    <div className="card-body">
      <a href={props.link} className="btn btn-primary">
        Visit {props.cityName}
      </a>
    </div>
  </div>
);

export default TouristicInfoCard;
