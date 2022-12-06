import React from "react";

const TouristInfoCards = props => {
  console.log(props);
  return (
    <div className="card">
      {props.HotelsInfo.map((card, index) => (
        <div key={index} className="infoCard">
          <img src={card.imgUrl} className="card-img-top" alt="" />
          <h2>{card.cityName}</h2>
          <p>{card.info}</p>
          <div className="card-body">
            <a href={card.moreInfo} className="btn btn-primary">
              More information
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TouristInfoCards;
