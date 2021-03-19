import React from "react";

export const TouristInfoCards = props => {
  //console.log(props);
  return (
    <div className="card-container">
      {props.cities.map((city, index) => (
        <div key={index} className="card">
          <img src={city.img} alt="" className="card-img-top" />
          <div className="card-body">
            <a href={city.link} target="_blank" className="btn btn-primary">
              {city.name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
