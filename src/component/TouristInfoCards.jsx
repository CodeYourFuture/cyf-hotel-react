import React from "react";
import Glasgow from "../images/Glasgow.jpg";
import london from "../images/london.jpeg";
import manchester from "../images/manchester2.jpeg";

import "../App.css";

const infoCarts = [
  {
    name: "Glasgow",
    src: Glasgow,
    description:
      "Glasgow Scottish Gaelic: Glaschu  is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe.[7] In 2020, it had an estimated population of 635,640.",
    href: "peoplemakeglasgow.com"
  },
  {
    name: "Manchester",
    src: manchester,
    description:
      "Manchester is a city in Greater Manchester, England. It had a population of 552,000 in 2021.[6] It is bordered by the Cheshire Plain to the south, the Pennines to the north and east, and the neighbouring city of Salford to the west. ",
    href: "visitmanchester.com"
  },
  {
    name: "London",
    src: london,
    description:
      "London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million.[1] It stands on the River Thames in south-east England at the head of a 50-mile (80 km) est.",
    href: "peoplemakeglasgow.com"
  }
];
function Cart({ city }) {
  return (
    <div className="card">
      <img src={city.src} className="card-img-top" />
      <h3>{city.name}</h3>
      <p>{city.description}</p>
      <div className="card-body">
        <a href={city.href} className="btn btn-primary">
          Go {city.name}
        </a>
      </div>
    </div>
  );
}

function TouristInfoCards() {
  return (
    <div className="card-section">
      {infoCarts.map(city => (
        <Cart city={city} />
      ))}
    </div>
  );
}

export default TouristInfoCards;
