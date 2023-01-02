import React from "react";
import { useState } from "react";

export default function TourCard({ city, index }) {
  const [readmore, setReadmore] = useState(false);
  const readmoreInfo = () => {
    setReadmore(!readmore);
  };
  return (
    <div className="card text-center" key={index}>
      <img src={city.image} className="card-img-top" alt={city} />

      <div className="card-body">
        <h5 className="card-title fw-bolder">{city.name} </h5>
        {/* <p className="card-text"> {city.description}</p>  */}
        <p>
          {readmore
            ? city.description
            : `${city.description.substring(0, 150)}`}
          ....
          <button className="card-body-btn" onClick={readmoreInfo}>
            {readmore ? "Show Less" : "Read More"}
          </button>
        </p>
        <a href={city.link} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
