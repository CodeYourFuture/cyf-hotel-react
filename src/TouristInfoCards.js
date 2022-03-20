import React from "react";

export default function TouristInfoCards({ places }) {
  return (
    <div className="card-deck mt-3 w-75 mx-auto">
      {places.map(place => (
        <InfoCard {...place} key={place.name} />
      ))}
    </div>
  );
}

const InfoCard = ({ name, url, description, img }) => (
  <div className="card">
    <img src={img} className="card-img-top" alt={`Visit ${name}`} />
    <div className="card-body">
      <h4 className="card-title">{name}</h4>
      <p className="card-text">{description}</p>
      <a href={url} className="btn btn-primary">
        Visit {name}
      </a>
    </div>
  </div>
);
