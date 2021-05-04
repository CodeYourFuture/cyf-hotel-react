import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img alt="" src={props.cardInfo.image} className="card-img-top" />
      <div className="card-body">
        <a href={props.cardInfo.link} className="btn btn-primary">
          Go somewhere
        </a>
        <p>{props.cardInfo.summary}</p>
      </div>
    </div>
  );
}

export default Card;
