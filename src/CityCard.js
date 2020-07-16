import React from "react";

function CityCard(props) {
  return (
    <div className="card">
      <img
        src={props.city.image}
        alt="view of the city"
        className="card-img-top"
      />
      <div className="card-body">
        <p>{props.city.description}</p>
        <a href={props.city.website} className="btn btn-primary">
          {" "}
          Vist {props.city.name}
        </a>
      </div>
    </div>
  );
}

export default CityCard;
