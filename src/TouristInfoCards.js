import React from "react";
import PlacesToVisitData from "./PlacesToVisitData";
import "./TouristInfoCards.css";
function TouristInfoCards() {
  return (
    <div className="visit-cards">
      {PlacesToVisitData.map((item, index) => (
        <div className="card" key={index}>
          <h4>{item.city}</h4>
          <img src={item.img} className="card-img" alt="" />
          <div className="card-body">
            <p>{item.summary}</p>

            <a href={item.website} className="btn btn-primary">
              {item.city}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TouristInfoCards;
