import React from "react";
const TouristInfoCard = props => {
  return (
    <div className="card">
      <img src={props.img} alt={props.city} />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          Go to {props.city}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
