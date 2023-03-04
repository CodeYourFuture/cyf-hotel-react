import React from "react";
import HotelImage from "./images-folder/hotel.jpeg";

function TouristInfoCards(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <p>
          {props.name}:{props.description};
        </p>
        
        <a href={props.link} className="btn btn-primary">
          Visit {props.name}
        </a>
      </div>
    </div>
  );
}

export default TouristInfoCards;
