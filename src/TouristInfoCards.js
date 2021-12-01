import React from "react";
import InfoCard from "./InfoCard";

let allCardsInfo = [
  {
    src:
      "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/glasgow_clyde_arc_vb34161123.jpg",
    alt: "Glasgow city night time",
    cityName: "Glasgow",
    description:
      "From independent stores to high street retailers, Glasgow is the best shopping city. Glasgow's city centre is home to flagship stores, impressive shopping centres and designer favourites all within an easily walkable area. The city is also rich in artists and creators which makes for a thriving and exciting independent shopping scene.",
    href: "http://www.peoplemakeglasgow.com"
  },
  {
    src:
      "https://www.visitbritain.com/sites/default/files/consumer/paragraphs-bundles/image-header-with-text/manchester_town_hall_ve13463_1200x600_0_1_0_0.jpg",
    alt: "Manchester city night time",
    cityName: "Manchester",
    description:
      "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed. Known throughout the world as the birthplace of the industrial revolution, Manchester has a proud history in science, politics, music, arts and sport. And today the city combines this heritage with a progressive vision to be a city that delivers surprise and delight in equal measures.",
    href: "http://www.visitmanchester.com"
  },
  {
    src:
      "https://london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok:6LenFxuz",
    alt: "London city",
    cityName: "London",
    description:
      "Welcome to London! Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.",
    href: "http://www.visitlondon.com"
  }
];

const TouristInfoCards = () => {
  return (
    <div>
      {allCardsInfo.map((cardInfo, index) => {
        return (
          <InfoCard
            key={index}
            src={cardInfo.src}
            alt={cardInfo.alt}
            cityName={cardInfo.cityName}
            description={cardInfo.description}
            href={cardInfo.href}
          />
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
