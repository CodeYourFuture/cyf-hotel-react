import React from "react";
const TouristInfoCard = props => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <a href={props.link}>
        <img src={props.image} className="card-img-top" alt="..." />

        <div className="card-body">
          <p className="card-text">{props.city}</p>
        </div>
      </a>
    </div>
  );
};
export default TouristInfoCard;
