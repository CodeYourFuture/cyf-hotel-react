import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" />
      <h3>{props.name}</h3>
      <div className="card-body">
        <a href={props.url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
