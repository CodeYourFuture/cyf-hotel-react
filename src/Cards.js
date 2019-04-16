import React from "react";

const Card = (props) => {      //changed Cards to Card.
  return (                                           // added class to className
    <div className="card" style={{ width: "18rem" }}>   
      <img src={props.image} class="card-img-top" alt={props.city} />
      <div class="card-body">
        <h5 class="card-title">{props.city}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href={props.website} class="btn btn-primary" target="_blank">
          {props.city}
        </a>
      </div>
    </div>
  );
};
export default Card;
