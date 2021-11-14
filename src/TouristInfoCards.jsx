import React from "react";

const PlaceCard = ({ name, info, link, image }) => {
  return (
    <div className="card text-center">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h2 className="h1">{name}</h2>
        <p>{info}</p>
        <a
          href={link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          More information
        </a>
      </div>
    </div>
  );
};

export default PlaceCard;
