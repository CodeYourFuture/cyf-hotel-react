import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.img} alt={props.city} className="card-img-top" />
      <div className="card-body">
        <h4>{props.city}</h4>
        <p>{props.content}</p>
        <a href={props.link} className="btn btn-primary">
          Go to {props.city}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
