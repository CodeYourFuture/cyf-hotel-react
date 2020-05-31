import React from "react";

const CountryCards = props => {
  return (
    <div className="card">
      <img src={props.touristicInformation.imageURL} className="card-img-top" />
      <div className="card-body">
        <a
          href={props.touristicInformation.site}
          target="_blank"
          className="btn btn-primary"
          rel="noopener noreferrer"
        >
          {props.touristicInformation.city}
        </a>
      </div>
    </div>
  );
};

export default CountryCards;
