import React from "react";

const cityNames = [
  {
    cityName: "London",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/City_of_London%2C_seen_from_Tower_Bridge.jpg/1920px-City_of_London%2C_seen_from_Tower_Bridge.jpg",
    description:
      "London, the United Kingdom's capital, stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea. It has been a major settlement for two millennia.",
    url: "https://en.wikipedia.org/wiki/London"
  },
  {
    cityName: "Manchester",
    img:
      "https://static.independent.co.uk/2021/09/09/10/iStock-1330512300%20%281%29.jpg?",
    description:
      "Manchester is a city and metropolitan borough in Greater Manchester, England. The city has the country's fifth-largest population at 547,627 and lies within the United Kingdom's second-most populous urban area, with a population of 2.7 million.",
    url: "https://en.wikipedia.org/wiki/Manchester"
  },
  {
    cityName: "Glasgow",
    img:
      "https://cdn.ricardo.com/careers/media/assets/shutterstock_10061808040-glasgow-town.jpg",
    description:
      "Glasgow is the most populous city in Scotland and the fourth-most populous city in the United Kingdom, as well as being the 27th largest city by population in Europe.",
    url: "https://en.wikipedia.org/wiki/Glasgow"
  }
];

const TouristInfoCards = () => {
  return (
    <div className="cards">
      {cityNames.map((city, i) => {
        return (
          <div className="card" key={i}>
            <img src={city.img} alt={city.cityName} className="card-img-top" />
            <div className="card-body">
              <h2> {city.cityName} </h2>
              <p> {city.description} </p>
              <a
                href={city.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Go {city.cityName}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
