import React from "react";
import "./Card.css";
// import CityInfo from "./data/cityInfo.json";

const Card = ({ cityInfo }) => {
  return (
    <div>
      <div className="card" className="display">
        {cityInfo.map((city, key) => {
          return <img key={key} src={city.image} className="card-img-top" />;
        })}
      </div>
      <div>
        <div className="card-body">
          {cityInfo.map((city, key) => {
            return (
              <a key={key} href={city.link} className="btn btn-primary">
                Visit {city.name}
              </a>
            );
          })}
        </div>
      </div>
      {/* <a href={city.link} className="btn btn-primary">
            Visit {city.name}
          </a>
        </div>
      </div>
      <div>
        <span>{cityInfo.description}</span>
      </div> */}
    </div>
  );
};
export default Card;
