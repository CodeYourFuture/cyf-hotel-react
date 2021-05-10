import React from "react";

import Card from "./components/Card";

import London from "./images/london.jpeg";
import Glasgow from "./images/glasgow.jpeg";
import Manchester from "./images/manchester.jpeg";

const cards = [
  {
    cityName: "London",
    image: {
      file: London,
      alt: "London city"
    },
    info:
      "Is the capital and largest city of England and the United Kingdom. The city stands on the River Thames in the south-east of England, at the head of its 50-mile (80 km) estuary leading to the North Sea.  London has been a major settlement for two millennia, and was originally called Londinium.",
    link: "https://visitlondon.com/"
  },

  {
    cityName: "Glasgow",
    image: {
      file: Glasgow,
      alt: "London city"
    },
    info:
      " is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe. Historically part of Lanarkshire, the city now forms the Glasgow City council area, one of the 32 council areas of Scotland.",
    link: "https://peoplemakeglasgow.com/"
  },

  {
    cityName: "Manchester",
    image: {
      file: Manchester,
      alt: "London city"
    },
    info:
      "Is a major city in the northwest of England with a rich industrial heritage.The Castlefield conservation area’s 18th-century canal system recalls the city’s days as a textile powerhouse. The revitalised Salford Quays dockyards now house the Daniel Libeskind-designed Imperial War Museum North and the Lowry cultural centre  ",
    link: "https://visitmanchester.com/"
  }
];

const TouristInfoCards = () => {
  return (
    <div className="card-container text-center">
      {cards.map(card => (
        <Card {...card} />
      ))}
    </div>
  );
};
export default TouristInfoCards;
