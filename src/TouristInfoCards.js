import React from "react";

function TouristInfoCards(props) {
  return (
    <div className="card">
      <img src={props.data.thumbnail} className="card-img-top" />
      <div className="card-body">
        <a href={props.data.href} className="btn btn-primary">
          {props.data.name}
        </a>
      </div>
    </div>
  );
}

export default TouristInfoCards;
