import React from "react";
const TouristInfoCards = props => {
  return (
    <div className="card-group">
      <img src={props.src} className="card-img-top" />
      <div className="card-body">
        <a href={props.url} className="btn btn-primary">
          Go to {props.cityName}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
