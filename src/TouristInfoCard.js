import React from "react";

const TouristInfoCard = props => {
  return (
    <section className="cardSection">
      {props.cards.map((el, index) => (
        <div className="card" key={index}>
          <img src={el.img} alt={el.city} className="card-img-top" />
          <div className="card-body">
            <a
              href={el.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to {el.city}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TouristInfoCard;
