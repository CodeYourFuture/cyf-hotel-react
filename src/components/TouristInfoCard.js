import React from "react";

const TouristInfoCard = props => {
  return (
    <div className="card">
      <img
        alt="image"
        src={props.src}
        className="card-img-top"
        style={{ height: "100%" }}
      />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          {props.city}
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
