import React from "react";
import TouristInfoCard from "./TouristInfoCard";

const TouristInfoCards = () => {
  return (
    <div className="container">
      <div className="card-deck mt-5 mb-5">
        <TouristInfoCard
          link="https://peoplemakeglasgow.com"
          imageSource="https://images.unsplash.com/photo-1531152127291-ea24c3b2a1da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          city="Glasgow"
        />
        <TouristInfoCard
          link="https://visitmanchester.com"
          imageSource="https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
          city="Manchester"
        />
        <TouristInfoCard
          link="https://visitlondon.com"
          imageSource="https://images.unsplash.com/photo-1488747279002-c8523379faaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          city="London"
        />
      </div>
    </div>
  );
};

export default TouristInfoCards;
