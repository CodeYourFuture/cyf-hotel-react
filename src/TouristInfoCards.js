import React from "react";

function TouristInfoCards(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img src={props.city.image} className="card-img-top" />
        <div className="card-body">
          <p class="card-text">{props.city.text}</p>
          <a href={props.city.link} className="btn btn-primary">
            Go {props.city.name}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
