import React from "react";
const TouristInfoCards = props => {
  return (
    <div className="card" key={props.key}>
      <img className="card-img-top" src={props.city.imgSource} />
      <div className="card-body">
        <a href={props.city.cityUrl} className="btn btn-primary">
          {props.city.cityName}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
