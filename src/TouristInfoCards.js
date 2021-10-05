import React from "react";
import ManchesterImg from "./Manchester.jpeg";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img scr="" className="card-img-top" />
      <div className="card-body">
        <img src={ManchesterImg} alt="jjjj" />
        <h3>{props.city}</h3>
        <a href={props.url} target="_blank" className="btn btn-primary">
          Go Somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
