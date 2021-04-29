import React from "react";
import cities from "./Cities";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="row">
        {cities.map((props, index) => {
          return (
            <div className="card col-md-4 " key={index}>
              <img src={props.image} alt="cities" className="card-img-top" />
              <h2>{props.name}</h2>
              <p>{props.paragraph}</p>
              <div className="card-body">
                <a href={props.link}>
                  <button>More Information</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TouristInfoCards;
