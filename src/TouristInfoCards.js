import React from "react";

const TouristInfoCards = prop => (
  <div className="card">
    <img alt={prop.obj.city} className="card-img-top" src={prop.obj.img} />
    <div className="card-body">
      <h2> {prop.obj.city} </h2>
      <a
        href={prop.obj.url}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        More information
      </a>
    </div>
  </div>
);

export default TouristInfoCards;
