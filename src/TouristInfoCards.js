import React from "react";

// getting whole object which was passed from `App()` in 'props' and then get separate values from that object (name, link, image)
const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.city.image} className="card-img-top" alt="pic" />
      <div className="card-body" />
      <a href={props.city.link} className="btn btn-primary">
        Visit {props.city.name}
      </a>
    </div>
  );
};

export default TouristInfoCards;
