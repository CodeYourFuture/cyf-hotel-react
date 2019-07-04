import React from "react";
import TouristCardslsAndImages from "../data/TouristCardsLinksAndImages";

const TouristInfoCards = props => {
  return (
    <div>
      <h1 className="welcome-msg">Welcome to CYF Hotel</h1>
      <br />
      <div className="card-container">
        {TouristCardslsAndImages.map((city, index) => (
          <div key={index} className="card">
            <img src={city.photo} alt=" " className="card-img-top" />
            <div className="card-body">
              {city.cityName}
              <br />
              <a href={city.link} className="btn btn-primary">
                Go {city.cityName}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TouristInfoCards;
