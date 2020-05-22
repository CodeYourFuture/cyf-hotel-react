import React from "react";
const Card = props => {
  return (
    <ul className="card">
      <img src={props.city.image} className="card-img-top" alt=" Glasgow" />
      <div className="card-body">
        <a href={props.city.href} className="btn btn-primary">
          Go to {props.city.name}
        </a>
      </div>
    </ul>
  );
};
export default Card;
