import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      {/* <img className="card-img-top" /> */}
      <div className="card-body">
        <img src={props.img} width="200px" alt={props.city} />
        <h3>{props.city}</h3>
        <p>{props.cardtext}</p>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Go Somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
