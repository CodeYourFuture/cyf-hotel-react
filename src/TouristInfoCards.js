import React from "react";

function TouristInfoCards(props) {
  return (
    <div className="tourist-card d-flex justify-content-around">
      {props.cards.map((card, i) => (
        <div className="card" key={i}>
          <img src={card.img} alt={card.alt} className="card-img" />
          <div className="card-body text-center">
            <div className="card-city">{card.city}</div>
            <a
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn btn mt-3"
            >
              Visit Website
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TouristInfoCards;
