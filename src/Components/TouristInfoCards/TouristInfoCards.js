import React from "react";

const TouristInfoCards = props => {
  return props.touristInfoArray.map(item => {
    return (
      <div className="card">
        <img src={item.img} className="card-img-top" />
        <div className="card-body">
          <a href={item.touristInfo} className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};

export default TouristInfoCards;
