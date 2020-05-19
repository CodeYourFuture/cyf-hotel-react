import React from "react";

function TouristInfoCards(props) {
  return (
    <div className="card">
      <img src={props.imgUrl} className="card-img-top" />
      <div className="card-body">
        <a href={props.link} className="btn btn-primary" target="_blank">
          Visit {props.name}
        </a>
      </div>
    </div>
  );
}

export default TouristInfoCards;
