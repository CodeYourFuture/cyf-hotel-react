import React from "react";
import cities from "../data/cities.json";

const TouristInfoCards = () => {
  return (
    <div className="row d-flex justify-content-evenly ms-5 me-5 ps-5 pe-5 mb-5">
      {cities.map((city, index) => {
        return (
          <div className="col-sm-4 d-flex " key={"card-" + index}>
            <div className="card">
              <img
                className="card-img-top"
                style={{ height: "15rem" }}
                src={city.image}
                alt={city.name}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{city.name}</h5>
                <p className="card-text pt-2 pb-2">{city.description}</p>
                <a
                  className="btn btn-warning btn-sm"
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
