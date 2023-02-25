import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card-container">
      {props.cities.map((item, i) => (
        <div className="card" key={i}>
          <img src={item.src} className="card-img-top" alt="" />
          <h1>{item.city}</h1>
          <div>{item.text}</div>
          <div className="card-body">
            <a href={item.link} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
