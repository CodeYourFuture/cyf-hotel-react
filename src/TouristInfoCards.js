import React from "react";
import card from "./data/card";

export default function TouristInfoCards() {
  const cardInfo = card();
  return (
    <div className="d-flex justify-content-center">
      {cardInfo.map((element, index) => (
        <span key={index} className="card">
          <img src={element.image} alt="" className="card-img-top" />
          <div className="card-body">
            <p>{element.cityName}</p>
            <p>{element.text}</p>
            <a href={element.link} className="btn btn-primary">
              More information
            </a>
          </div>
        </span>
      ))}
    </div>
  );
}
