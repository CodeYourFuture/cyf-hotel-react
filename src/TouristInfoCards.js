import React from "react";
import TouristInfoCard from "./TouristInfoCard";

const citySites = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    city: "Glasgow",
    url: "https://peoplemakeglasgow.com"
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1596133026817-e40b51604c3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    city: "Manchester",
    url: "https://visitmanchester.com"
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1442181490158-6e6de87bdcab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    city: "London",
    url: "https://visitlondon.com"
  }
];

const TouristInfoCards = _ => {
  return (
    <div id="cards-container">
      {citySites.map(city => {
        return <TouristInfoCard props={city} />;
      })}
    </div>
  );
};

export default TouristInfoCards;
