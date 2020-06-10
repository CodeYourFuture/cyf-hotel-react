import React from "react";

const TouristInfoCards = (props) => {
  return (
    <div className="tourist-cards">
      {props.cardAttributes.map((attribute, index) => (
        <div className="card" key={index}>
          <img
            src={attribute.img}
            className="card-img-top"
            alt="{attribute.city} city"
          />
          <div className="card-body">
            <a href={attribute.src} target="_blank" className="btn btn-primary">
              Visit {attribute.city}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
