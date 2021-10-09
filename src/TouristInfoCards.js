import React from "react";

const InfoCards = props => {
  return (
    <div className="info-card-container">
      {props.cards.map(city => (
        <div key={city.cityName} className="card">
          <img className="card-img-top" src={city.image} alt={city.alt} />
          <div className="card-body">
            <h3>{city.cityName}</h3>
            <p className="card-paragraph">{city.summary}</p>
            <a href={city.link} className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
