import React from "react";
import cities from "../data/cities.json";

const TouristInfoCards = () => {
  return (
    <div className="row d-flex justify-content-center m-2">
      {cities.map((city, index) => {
        return (
          <div className="col-sm-3 d-flex " key={"card-" + index}>
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">{city.name}</h5>
              </div>
              <div className="card-body d-flex flex-column">
                <img
                  className="card-img-top"
                  src={city.image}
                  alt={city.name}
                />
                <p className="card-text pt-4">{city.description}</p>
                <a
                  className="btn btn-warning btn-sm justify-self-end"
                  href={city.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More information
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
