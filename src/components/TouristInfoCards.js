import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      {props.cards.map((elem, index) => (
        <div className="card-body" key={index}>
          <img src={elem.img} alt={elem.city} className="card-img-top" />
          <a
            href={elem.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            {elem.city};
          </a>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
