import React from "react";
import "./Card.css";

const Card = ({ cityInfo }) => {
  return (
    <div>
      <div className="card">
        {cityInfo.map((city, key) => {
          return (
            <img key={key} src={city.image} className="card-img-top" alt="" />
          );
        })}

        {cityInfo.map((city, key) => {
          return (
            <a key={key} href={city.link} className="btn btn-primary">
              Visit {city.name}
            </a>
          );
        })}
        <div>
          {cityInfo.map((d, i) => {
            return <span key={i}>{d.description}</span>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Card;
