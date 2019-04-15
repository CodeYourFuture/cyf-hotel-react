import React from "react";
const TouristInfoCards = props => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <a href={props.link}>
        <img src={props.image} class="card-img-top" alt="..." />

        <div class="card-body">
          <p class="card-text">{props.city}</p>
        </div>
      </a>
    </div>
  );
};
export default TouristInfoCards;
