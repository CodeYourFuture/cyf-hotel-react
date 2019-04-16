import React from "react";
import Card from "./Cards";

const TouristInfoCards = () => {            //changed Cards to Card.
  return (
    <div className="cards">
      <Card website="https://peoplemakeglasgow.com/" city="Glasgow" /> 
      <Card website="https://www.visitmanchester.com/" city="Manchester" />
      <Card website="https://www.visitlondon.com/" city="London" />
    </div>
  );
};
//changed Cards to Card.
export default TouristInfoCards;
