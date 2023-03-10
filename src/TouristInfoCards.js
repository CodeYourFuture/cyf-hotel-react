import React from "react";
import "./App.css";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.imageSrc} className="card-img-top" alt="" />
      <div className="card-body">
        <h3>{props.destination}</h3>
        <p>{props.description}</p>
        <a href={props.link} className="btn btn-primary">
          More information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
