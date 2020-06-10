import React from "react";

const TouristInfoCards = props => {
  return props.touristInformation.map((element, index) => {
    return (
      <div className="card" key={index}>
        <img src={element.imageURL} alt="Cityscape" className="card-img-top" />
        <div className="card-body">
          <a href={element.site} className="btn btn-primary">
            Visit {element.city}
          </a>
        </div>
      </div>
    );
  });
};

export default TouristInfoCards;
