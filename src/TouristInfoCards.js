import React from "react";
import cardInfo from "./data/cardInfo.json"
function TouristInfoCards() {


  
  return cardInfo.map((element) => (
    <div className="card" key={element.city}>
      <div className="card-body">
        <img src={element.image} className="card-img-top" />
        <h2 className="card-title">{element.city}</h2>
        <p className="card-description">{element.description}</p>
        <a href={element.url} className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  ));
}

export default TouristInfoCards;
