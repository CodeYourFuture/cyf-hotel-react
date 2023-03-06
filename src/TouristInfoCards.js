import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card-container">
      {props.cities.map((city, key) => (
        <div className="card" key={key}>
          <img src={city.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{city.cardTitle}</h5>
            <p className="">{city.cardText}</p>
            <a href={city.href} className="btn btn-primary" target="blanket">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
