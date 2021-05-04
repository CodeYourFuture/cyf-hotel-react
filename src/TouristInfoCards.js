import React from "react";

const TouristInfoCards = props => {
  return (
    <div>
      <img src={props.cityImg} alt="..." />
      <div>
        <h5>{props.city}</h5>
        <p>{props.cityInfo}</p>
        <a href="peoplemakeglasgow.com">Go somewhere</a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
