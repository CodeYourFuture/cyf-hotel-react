import React from "react";

const InfoCard = props => {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" alt={props.alt}></img>
      <h2 className="cardHeading">{props.cityName}</h2>
      <p className="cityDescription">{props.description}</p>
      <a
        href={props.href}
        className="btn btn-primary ButtonInfoCard"
        target="blank"
      >
        Read more
      </a>
    </div>
  );
};
export default InfoCard;
