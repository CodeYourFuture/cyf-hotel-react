import React from "react";
import TouristicInfoCard from "./TouristicInfoCard";

const TouristInfoCards = () => (
  <div className="card-container">
    <TouristicInfoCard
      src="https://images.unsplash.com/photo-1531152369337-1d0b0b9ef20d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      link="https://peoplemakeglasgow.com/"
      cityName="Glasgow"
      alt="Glasgow Image"
    />
    <TouristicInfoCard
      src="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1884&q=80"
      link="https://www.visitmanchester.com/"
      cityName="Manchester"
      alt="Manchester Image"
    />
    <TouristicInfoCard
      src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
      link="https://www.visitlondon.com/"
      cityName="London"
      alt="London Image"
    />
  </div>
);

export default TouristInfoCards;
