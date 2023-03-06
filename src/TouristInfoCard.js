import React from "react";

const TouristInfoCard = (props) => {
  return (
    <div className="card">
      <img src={props.city.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{props.city.name}</h5>
        <p className="card-text text-center">{props.city.description}</p>
        <a
          href={props.city.link}
          target="_blank"
          className="btn btn-primary button"
        >
          More information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
