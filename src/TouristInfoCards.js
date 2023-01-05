import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img
        src={props.city.image}
        alt={props.city.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h4>{props.city.name}</h4>
        <p>{props.city.description}</p>
        <a href={props.city.link} className="btn btn-primary">
          Go to {props.city.name}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
