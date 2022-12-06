import React from "react";

const InfoCard = props => {
  return (
    <div className="card">
      <img
        src={props.imageSource}
        alt="imageOfCities"
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title"> {props.title}</h4>
        <p className="card-text">{props.paragraph}</p>

        <a href={props.href} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default InfoCard;
