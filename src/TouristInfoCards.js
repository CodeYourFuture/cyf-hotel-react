import React from "react";
import TouristicInfoCard from "./TouristicInfoCard";

const TouristicInfoCards = () => (
  <div className="touristic-cards-container">
    <TouristicInfoCard
      src="https://images.pexels.com/photos/427679/pexels-photo-427679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      link="https://visitlondon.com"
      cityName="London"
      alt="London Image"
    />
    <TouristicInfoCard
      src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/880/cached.offlinehbpl.hbpl.co.uk/news/OTM/Manchester-Zuzanna-Neziri-6272043372_5cd92b0ea9_b-Flickr-CC-20190620063742491.jpg"
      link="https://visitmanchester.com"
      cityName="Manchester"
      alt="Manchester Image"
    />
    <TouristicInfoCard
      src="https://cdn.travel-mediaserver.com/driveaway/images/car-hire/destinations/glasgow-large.jpg"
      link="https://peoplemakeglasgow.com"
      cityName="Glasgow"
      alt="Glasgow Image"
    />
  </div>
);

export default TouristicInfoCards;
