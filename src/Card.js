import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.city.imgSource}
        alt="this is city pic"
      />
      <div className="card-body">
        <a href={props.city.cityUrl} className="btn btn-primary">
          {props.city.cityName}
        </a>
      </div>
    </div>
  );
};
export default Card;
