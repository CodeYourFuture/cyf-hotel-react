import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.imgUrl} className="card-img-top" alt="" />
      <div className="card-body">
        <a
          href={props.link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit {props.name}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
