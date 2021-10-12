import React from "react";

function TouristInfoCards(props) {
  return (
    <div>
      {props.cards.map((card, i) => (
        <div className="card" key={i}>
          <img src={card.img} className="card-img-top" />
          <div className="card-body">
            {card.city}
            <a href={card.link} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TouristInfoCards;
