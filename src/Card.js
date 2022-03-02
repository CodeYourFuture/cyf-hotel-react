import React from "react";

const Card = ({ title, link, desc, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" />
      <div className="card-body">
        <h2>{title}</h2>
        <p>{desc}</p>
        <a href={link} className="btn btn-primary">
          More Information
        </a>
      </div>
    </div>
  );
};

export default Card;
