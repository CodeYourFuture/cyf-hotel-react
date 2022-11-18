import React from "react";

const CardCity = ({ src, href, CityName, Summary }) => {
  return (
    <div className="city">
      <img src={src} alt="cardImage" className="top-img" />
      <div className="body">
        <h1>{CityName}</h1>
        <p>{Summary}</p>
        <a href={href} className="btn btn-primary">
          More information About {CityName}
        </a>
      </div>
    </div>
  );
};

export default CardCity;
