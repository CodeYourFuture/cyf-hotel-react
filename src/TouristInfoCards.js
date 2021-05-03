import React from "react";

function TouristInfoCards(props) {
  return (
    <div className="row">
      {props.cities.map((city, index) => (
        <div className="card col-4 text-center" key={index}>
          <img className="card-img-top" src={city.img} alt={city.cityName} />
          <h2>{city.cityName}</h2>
          <p>{city.info}</p>
          <a href={city.link} className="btn btn-info">
            More Information
          </a>
        </div>
      ))}
    </div>
  );
}

export default TouristInfoCards;
