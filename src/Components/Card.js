import React from "react";

function Card(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img
          src={props.city.image}
          className="card-img-top"
          alt={props.city.name}
        />
        <div className="card-body">
          <p className="card-text">{props.city.text}</p>
          <a href={props.city.link} className="btn btn-primary">
            Go {props.city.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
