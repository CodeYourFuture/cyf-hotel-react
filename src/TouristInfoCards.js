import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="wrapper">
      <div className="card">
        <img src={props.img} alt="" className="card-img-top" />
        <div className="card-body">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description">{props.description}</p>
          <a
            href={props.button}
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary"
          >
            More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default TouristInfoCards;
