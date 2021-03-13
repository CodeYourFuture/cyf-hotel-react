import React from "react";

const TouristInfoCards = props => {
  return (
    <section className="cardSection">
      {props.cards.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.city} className="card-img-top" />
          <div className="card-body">
            <a
              href={item.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to {item.city}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TouristInfoCards;
