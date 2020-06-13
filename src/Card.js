import React from "react";

const Card = props => {
  return (
    <div className="card col-10 lg-col-4">
      <img
        className="card-img col-12 lg-col-12"
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
