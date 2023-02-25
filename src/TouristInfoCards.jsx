import React from "react";

export default function TouristInfoCards(props) {
  let card = props.card.map((el) => (
    <div className="card">
      <img src={el.img} className="card-img-top" />
      <div className="card-body">
        <h1>{el.name}</h1>
        <p>{el.description}</p>
        <a href={el.link} className="btn btn-primary">
          More Information
        </a>
      </div>
    </div>
  ));
  return <div className="cardWrapper">{card}</div>;
}
