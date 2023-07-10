import React from "react";

const TouristInfoCard = (props) => {
  return (
    <div className="card">
      <img src={`/images/${props.image}`} className="card-img-top" />
      <div className="card-body">
        <h2 className="card-name">{props.title}</h2>
        <p className="card-description">{props.description}</p>
        <a href={props.link} className="btn btn-primary" target="_blank">
          Read more
        </a>
      </div>
    </div>
  );
};
export default TouristInfoCard;
