import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt="" />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          {props.cityName}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
