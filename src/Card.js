import React from "react";

const Card = props => {
  return (
    <div className="card">
      <img src={props.imgSrc} className="card-img-top" />
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <a href="#" className="btn btn-primary">
          More Information
        </a>
      </div>
    </div>
  );
};
