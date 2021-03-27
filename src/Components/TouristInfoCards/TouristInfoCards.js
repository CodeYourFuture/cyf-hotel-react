import React from "react";

const TouristInfoCards = props => {
  const element = props.touristInfoArray.map((item, index) => {
    return (
      <div key={index} className="card">
        <img src={item.img} className="card-img-top" />
        <div className="card-body">
          <a href="item.TouristInfo" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
  return <div className="cardContainer">{element}</div>;
};

export default TouristInfoCards;
