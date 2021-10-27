import React from "react";

const TouristInfoCards = props => {
  return (
    <div>
      {props.cards.map((cardInfo, index) => (
        <div className="card">
          <img
            src={cardInfo.image}
            alt={cardInfo.alt}
            key={index}
            className="card-img-top"
          />
          <div className="card-body">
            <h4>{cardInfo.title}</h4>
            <p>{cardInfo.text}</p>
            <a href={cardInfo.link} className="btn btn-primary">
              More Information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
