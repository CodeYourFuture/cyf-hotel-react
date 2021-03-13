import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" alt={props.name} />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary">
          {props.name}
        </a>
      </div>
    </div>
  );
};

export default Card;
