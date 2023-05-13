import React from "react";

function TouristInfoCards(props) {

  const card = props.cards.map((element) => (
    <div className="card">
      <img
        src={element.image}
        className="card-img-top"
      />
      <h1>{element.city}</h1>
      <p>{element.description}</p>
      <div className="card-body">
        <a
          href={element.buttonLink}
          className="btn btn-primary"
          target="_blank"
        >
          More Information
        </a>
      </div>
    </div>
  ));

  return (
    <div className="cards-wrapper">
      {card}
    </div>
  );
}

export default TouristInfoCards;
