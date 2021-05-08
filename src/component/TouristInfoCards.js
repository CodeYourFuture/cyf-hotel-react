import React from "react";

const TouristInfoCards = props => {
  return (
    <section className="cardSection">
      {props.cards.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.city} className="card-img-top" />
          <div className="card-body">
            <p className="text-center">
              For more information about the city of {item.city} click on the
              link below
              <br />
              <a
                href={item.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit {item.city}
              </a>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TouristInfoCards;
