import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img scr="" className="card-img-top" />
      <div className="card-body">
        <img src={props.img} width="200px" />
        <h3>{props.city}</h3>
        <p>{props.cardtext}</p>
        <a href={props.url} target="_blank" className="btn btn-primary">
          Go Somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
