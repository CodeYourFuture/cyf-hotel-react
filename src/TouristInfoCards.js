import React from "react";

const TouristInfoCards = (props) => {
  return (
      <div className="card">
        <h1>{props.title}</h1>
        <img src={props.image} />
        <p>{props.description}</p>
        <a href ={
          props.link}></a>
    </div>
  );
};

export default TouristInfoCards;
