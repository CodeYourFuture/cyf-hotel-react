import Cities from "./data/cities.json";
import React from "react";

function TouristInfoCards(props) {
  return (
    <div className="album py-5">
      <div className="container">
        <div className="row">
          {Cities.map((city, index) => {
            return (
              <div key={index} className="col-md-4">
                <div className="card mb-4">
                  <img src={city.image} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">{city.text}</p>
                    <a href={city.link} className="btn btn-primary">
                      Go {city.name}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
