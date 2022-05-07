import React from "react";

function TouristInfoCards(props) {
  return props.cities.map(object => (
    <div className="card" key={object.cityname}>
      <img src={object.mainImage} className="card-img-top" />
      <div className="card-body">
        <a href={object.website} className="btn btn-primary">
          {object.cityname}
        </a>
        <p>{object.description}</p>
      </div>
    </div>
  ));
}

export default TouristInfoCards;
