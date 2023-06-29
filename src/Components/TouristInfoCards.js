import React from "react";

const TouristInfoCards = ({ image, title, text, link }) => {
  return (

    <div className="card-container">

      <div className="card">
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={link} className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
