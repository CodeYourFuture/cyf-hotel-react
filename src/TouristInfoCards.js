import React from "react";

const TouristInfoCards = ({ cards }) => {
  return (
    <div id="card-container">
      {cards.map((card, ind) => (
        <div className="card" key={ind}>
          <img src={card.image} className="card-img-top" alt="" />
          <div className="card-body">
            <a
              href={card.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to {card.dir}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
