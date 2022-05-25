import React from "react";

function InfoCards(props) {
  console.log(props);
  return (
    <section className="cardSection">
      {props.cardsInfo.map((item, index) => (
        <div className="card" key={index}>
          <img className="card-img-top" src={item.img} alt={item.city} />
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
