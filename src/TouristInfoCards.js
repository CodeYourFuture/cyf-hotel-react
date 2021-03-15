import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.imgSrc} className="card-img-top" />
      <div className="card-body">
        <a href={props.link} target="_blank" className="btn btn-primary">
          Learn more about {props.cityName}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
