import React from "react";

const TouristInfoCard = props => (
  <div className="card" key={props.city.id}>
    <img src={props.city.img} className="card-img-top" alt={props.city.name} />
    <div className="card-body">
      <h5 className="card-title">{props.city.name}</h5>
      <p className="card-text text-justify">{props.city.info}</p>
      <a href={props.city.url} className="btn btn-info" target="_blank">
        Find out more
      </a>
    </div>
  </div>
);

export default TouristInfoCard;
