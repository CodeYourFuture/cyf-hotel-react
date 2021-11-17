import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" alt="" />
      <div className="card-body">
        <h5>{props.cityName}</h5>
        <h6>{props.cityInfo}</h6>
        <a href={props.href} className="btn btn-primary">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
