import React from "react";

function InfoCards(props) {
  return (
    <section className="cardSection">
      {props.cards.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.img} alt={item.city} className="card-img-top" />
          <p> {item.paragraph} </p>
          <div className="card-body">
            <a
              href={item.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              For Information Click Here {item.city}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default InfoCards;
