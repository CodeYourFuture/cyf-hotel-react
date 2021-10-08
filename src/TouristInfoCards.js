import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card-container">
      {props.cardInfo.map((card, index) => (
        <div className="card">
          <img
            src={card.image}
            alt={card.alt}
            key={index}
            className="card-img-top"
          />
          <div className="card-body">
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <a href={card.link} key={index} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
