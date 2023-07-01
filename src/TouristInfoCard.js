import React from "react";

const TouristInfoCard = (props) => {
  return (
    <div className="card">
      <img
        src={`../images/${props.image}`}
        alt={TouristInfoCard}
        className="card-img-top"
      />
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <a href={props.link} className="btn btn-primary" target="_blank">
          More Information
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
