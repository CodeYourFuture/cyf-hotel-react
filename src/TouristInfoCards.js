import React from "react";

const TouristInfoCards = props => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={props.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">{props.city}</p>
        <a href={props.link} class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
