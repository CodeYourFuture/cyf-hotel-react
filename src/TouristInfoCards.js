import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card1">
      {props.Data.map((Element, index) => {
        return (
          <div className="card" key={index}>
            <img src={Element.pic} className="card-img-top" />
            <h3 className="Name-card">Visit {Element.City}</h3>
            <p className="Name-card">{Element.info}</p>
            <div className="card-body">
              <a href={Element.web} className="btn btn-primary">
                GO TO {Element.City}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
