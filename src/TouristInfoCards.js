import React from "react";
import cityCard from "./data/cityCard.json";

function TouristInfoCards() {
  return (
    <container className="card-text-center">
      <div className="container">
        <div className="row">
          {cityCard.map((placeObject, index) => {
            return (
              <div className="col-md-4 col-sm-12 g-3">
                <div key={index} className="card">
                  <img
                    src={placeObject.img}
                    className="card-img-top"
                    alt={placeObject.alt}
                  />
                  <h1 className="card-title">{placeObject.city}</h1>
                  <div className="city">
                    <p className="card-text">{placeObject.info}</p>
                  </div>

                  <div className="card-body">
                    <a href={placeObject.link} className="btn btn-primary">
                      >> VISIT
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </container>
  );
}
export default TouristInfoCards;
