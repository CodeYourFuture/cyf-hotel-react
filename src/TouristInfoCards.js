import React from "react";
import CountryCards from "./CountryCards";

const TouristInfoCards = props => {
  return (
    <div className="card-container">
      <CountryCards touristicInformation={props.touristicInformation[0]} />
      <CountryCards touristicInformation={props.touristicInformation[1]} />
      <CountryCards touristicInformation={props.touristicInformation[2]} />
    </div>
  );
};
export default TouristInfoCards;
