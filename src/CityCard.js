import React from "react";

const CityCard = ({ src, href, CityName, Description }) => (
  <div className="card">
    <img src={src} alt="cardImage" className="card-img-top" />
    <div className="card-body">
      <h1>{CityName}</h1>
      <p>{Description}</p>
      <a href={href} className="btn btn-primary">
        More Information about {CityName}
      </a>
    </div>
  </div>
);

export default CityCard;
