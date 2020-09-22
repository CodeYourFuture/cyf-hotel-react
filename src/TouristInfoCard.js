import React from "react";

const TouristInfoCard = props => {
  return (
    <div className="card">
      <img src={props.imgURL} className="card-img-top" alt="city" />
      <div className="card-body">
        <a href={props.URL} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCard;
