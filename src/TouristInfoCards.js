import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="container">
      <div className="card">
        <img src={props.image} className="card-img-top" />
        <div className="card-body">
          <h1>{props.name}</h1>
          <p>{props.description}</p>
          <a href={props.link} className="btn btn-warning">
            {props.button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
