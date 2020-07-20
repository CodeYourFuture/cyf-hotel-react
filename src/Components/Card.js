import React from "react";

function Card({ city }) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={city.image} className="card-img-top" alt={city.name} />
        <div className="card-body">
          <p className="card-text">{city.text}</p>
          <a href={city.link} className="btn btn-primary">
            Go {city.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
