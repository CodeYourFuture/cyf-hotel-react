import React from "react";

const TouristicInfoCard = props => (
  <div className="card-container">
    <h1>{props.city}</h1>
    <img className="card-img-top" src={props.src} alt={props.cityImage} />
    <div className="card-body">
      <a href={props.link} className="btn btn-primary">
        Go {props.city}
      </a>
    </div>
  </div>
);

export default TouristicInfoCard;
