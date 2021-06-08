import React from "react";
export const TouristInfoCards = props => {
  return (
    <div className="card-group">
      <img src={props.src} alt="" className="card-img-top" />
      <div className="card-body">
        <a href={props.url} className="btn btn-primary">
          Go to {props.cityName}
        </a>
      </div>
    </div>
  );
};
