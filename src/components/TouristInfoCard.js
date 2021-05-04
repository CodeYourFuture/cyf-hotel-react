import React from "react";

export default function TouristInfoCard({ city }) {
  return (
    <div className="card ml-auto mr-auto mt-3">
      <img src={city.img} className="card-img-top" alt={city.name} />
      <div className="card-body">
        <a href={city.link} className="btn btn-primary">
          {city.name}
        </a>
      </div>
    </div>
  );
}
