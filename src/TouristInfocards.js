import React from "react";

export const TouristInfoCards = props => {
  return (
    <div className="cards-wrapper">
      {props.cities.map((city, index) => (
        <div key={index} className="card">
          <img src={city.img} alt={city.alt} />
          <div className="card-body">
            <a href={city.link} className="btn btn-primary">
              {city.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
