import React from "react";
import OneInfoCard from "./OneInfoCard";

const TouristInfoCards = () => {
  return (
    <div className="cards-container">
      <OneInfoCard
        cityName="Glasgow"
        imgSrc="https://images.unsplash.com/photo-1519044444158-d7b0e8452004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        url="https://peoplemakeglasgow.com/"
      />
      <OneInfoCard
        cityName="Manchester"
        imgSrc="https://images.unsplash.com/photo-1551983627-d46f03818923?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        url="https://visitmanchester.com/"
      />
      <OneInfoCard
        cityName="London"
        imgSrc="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        url="https://visitlondon.com/"
      />
    </div>
  );
};

export default TouristInfoCards;
