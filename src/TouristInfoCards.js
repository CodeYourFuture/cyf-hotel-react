import React from "react";

function TouristInfoCards(props) {
  return props.cities.map(city => {
    return (
      <div className="col-md-4">
        <div className="card mb-4">
          <img src={city.image} className="card-img-top" />
          <div className="card-body">
            <p className="card-text">{city.text}</p>
            <a href={city.link} className="btn btn-primary">
              Go {city.name}
            </a>
          </div>
        </div>
      </div>
    );
  });
}

export default TouristInfoCards;
