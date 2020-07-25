import React from "react";
import "./Card.css";

const Card = ({ cityInfo }) => (
  <div className="card">
    <img src={cityInfo.image} className="card-img-top" alt="" />
    <div className="card-body">
      <a
        href={cityInfo.link}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        {cityInfo.name}
      </a>
      <p className="card-text">{cityInfo.description}</p>
    </div>
  </div>
);

export default Card;
