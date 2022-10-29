import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          More Information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
