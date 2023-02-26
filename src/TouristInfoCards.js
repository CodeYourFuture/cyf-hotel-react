import React from "react";
import HotelImage from "./images-folder/hotel.jpeg";

function TouristInfoCards(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" />
      <div className="card-body">
        <p>
          {props.name}: A United Kingdom city that is worth visiting
          for a great day out. Wether you are a tourist or just playing one for the day..!
        </p>
        <a href={props.link} className="btn btn-primary">
          Visit {props.name}
        </a>
      </div>
    </div>
  );
}

export default TouristInfoCards;
