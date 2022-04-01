import React from "react";
import cityCard from "./data/cityCard.json";

function TouristInfoCards() {
  return (
    <div>
      {cityCard.map(placeObject => {
        return (
          <div className="card">
            <img src={placeObject.img} className="card-img-top" />
            <p class="cardInfo">{placeObject.info}</p>
            <div className="card-body" align="center">
              <a href={`${placeObject.link}`} className="btn btn-primary">
                {placeObject.city}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristInfoCards;
