import React from "react";
import TouristInfoCard from "./TouristInfoCard";
const cities = [
  {
    id: 0,
    imgUrl:
      "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/Scotland/Glasgow/Glasgow-travel-AP85155025.jpg",
    websiteURL: "//peoplemakeglasgow.com"
  },
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    websiteURL: "//visitmanchester.com"
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    websiteURL: "//visitlondon.com"
  }
];

const CardsSection = () => {
  return (
    <div className="cards-section container">
      {cities.map(city => (
        <TouristInfoCard
          key={city.id}
          imgURL={city.imgUrl}
          URL={city.websiteURL}
        />
      ))}
    </div>
  );
};

export default CardsSection;
