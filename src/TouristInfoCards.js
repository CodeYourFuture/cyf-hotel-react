import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="tourist-card">
      {props.citiesName.map(city => {
        return (
          <div className="card">
            <img src={city.image} className="card-img-top" alt="" />
            <div className="card-body">
              <h3 className="card-title">{city.name}</h3>
              <p text={city.summary} />
              <a href={city.website} className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
