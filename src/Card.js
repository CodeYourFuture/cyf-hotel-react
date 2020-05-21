import React from "react";
const Card = props => {
  return (
    <div className="card">
      <img alt="okokok" src={props.image} className="card-img-top" />
      <div className="card-body">
        <a href="props.href" className="btn btn-primary">
          Go to {props.city}
        </a>
      </div>
    </div>
  );
};
export default Card;
