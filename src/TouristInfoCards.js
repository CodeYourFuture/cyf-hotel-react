import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="tourist-information">
      <div className="container">
        <div className="row">
          {props.data.map((singleCard, index) => {
            return (
              <div className={props.cardColClass} key={index}>
                <div className="card-image-container">
                  <img
                    className="card-img-top"
                    src={singleCard.image}
                    alt="Card cap"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title" key={index + 1}>
                    {singleCard.location}
                  </h5>
                  <p className="card-text" key={index + 2}>
                    {singleCard.text}
                  </p>
                  <a href={singleCard.link} className="btn btn-primary">
                    {singleCard.buttonText}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
