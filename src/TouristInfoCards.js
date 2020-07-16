import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="cardsContainer">
      {props.cities.map(city => {
        return (
          <div className="card">
            <img
              src={city.imageSrc}
              className="card-img-top"
              alt={city.imageAlt}
            />
            <div className="card-body">
              <h5 className="card-title">{city.city}</h5>
              <p className="card-text" />
              <a href={city.linkHref} className="btn btn-primary">
                Explore {city.city}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
