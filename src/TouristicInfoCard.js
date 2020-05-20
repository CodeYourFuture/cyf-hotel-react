import React from "react";
//src, link, cityName
const TouristicInfoCard = props => (
  <div>
    <div className="card">
      <h1>{props.cityName}</h1>
      <img className="card-img-top" src={props.src} alt={props.cityImage} />
    </div>
    <div className="card-body">
      <a href={props.link} className="btn btn-primary">
        Go {props.cityName}
      </a>
    </div>
  </div>
);
export default TouristicInfoCard;
