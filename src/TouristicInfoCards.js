import React from "react";

const TouristicInfoCards = props => {
  return props.cardArr.map((card, index) => {
    return (
      <div key={index} className="card m-5" style={{ width: 18 + "rem" }}>
        <img src={card.img} alt="City views " className="card-img-top" />
        <div className="card-body">
          <p>{card.text}</p>
          <a
            href={card.link}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            {card.name}
          </a>
        </div>
      </div>
    );
  });
};

export default TouristicInfoCards;
