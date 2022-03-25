import React from "react";

const TouristInfoCards = () => {
  const cities = [
    {
      cityName: "Glasgow",
      image: "./images/glasgow-bridge.jpeg",
      text:
        "Glasgow, Gaelic Glaschu, city, west-central Scotland. It is situated along both banks of the River Clyde 20 miles (32 km) from that river's mouth on the western, or Atlantic, coast. Glasgow is Scotland's largest city, and it forms an independent council area that lies entirely within the historic county of Lanarkshire.",
      link: "https://peoplemakeglasgow.com/",
      alt: "Glasgow"
    },
    {
      cityName: "Manchester",
      image: "./images/manchester-riverside.jpeg",
      text:
        "Manchester, city and metropolitan borough in the metropolitan county of Greater Manchester urban county, northwestern England. Most of the city, including the historic core, is in the historic county of Lancashire, but it includes an area south of the River Mersey in the historic county of Cheshire..",
      link: "https://www.visitmanchester.com/",
      alt: "Manchester"
    },
    {
      cityName: "London",
      image: "./images/london-christmas.jpeg",
      text:
        "London, city, capital of the United Kingdom. It is among the oldest of the world's great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain's largest metropolis, it is also the country's economic, transportation, and cultural centre.",
      link: "https://visitlondon.com/",
      alt: "London"
    }
  ];
  return (
    <div className="cards-wrapper">
      {cities.map((city, index) => {
        return (
          <div key={index} className="card">
            <img
              src={require(`${city.image} alt=${city.alt}`)}
              className="card-img-top"
            />
            <h2 className="city-name">{city.cityName}</h2>
            <p className="city-text">{city.text}</p>
            <div className="card-body">
              <a href={`${city.link}`} className="btn btn-primary">
                Go to {city.cityName}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
