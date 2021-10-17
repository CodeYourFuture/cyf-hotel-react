import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.imageSrc} className="card-img-top" alt="Destination" />
      <div class="card-body">
        <h5 class="card-title">{props.place}</h5>
        <p class="card-text">{props.about}</p>
        <a href={props.link} class="btn btn-primary">
          More Information
        </a>
      </div>
    </div>
  );
}

export default Card;
