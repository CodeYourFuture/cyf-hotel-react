import React from "react";

const TouristInfoCards = () => {
  const places = [
    {
      name: "Glasgow",
      image:
        "https://img.wallpapersafari.com/desktop/1280/1024/94/65/m9lET8.jpg",
      link: "https://peoplemakeglasgow.com",
      summary:
        "Home to more than 20 museums and art galleries, including the magnificent Kelvingrove Art Gallery and Museum and the Riverside Museum, a radical space designed by Zaha Hadid that reveals the history of transport in the city."
    },
    {
      name: "Manchester",
      image: "https://wallpaperaccess.com/full/2560738.jpg",
      link: "https://www.visitmanchester.com",
      summary:
        "Manchester, city and metropolitan borough in the metropolitan county of Greater Manchester urban county, northwestern England. Most of the city, including the historic core, is in the historic county of Lancashire, but it includes an area south of the River Mersey in the historic county of Cheshire."
    },
    {
      name: "London",
      image:
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      link: "https://visitlondon.com",
      summary:
        " city, capital of the United Kingdom. It is among the oldest of the world’s great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain’s largest metropolis, it is also the country’s economic, transportation, and cultural centre."
    }
  ];
  return places.map((x, index) => (
    <div key={index} className="card">
      <h1>{x.name}</h1>
      <img src={x.image} className="card-img-top" alt="different-places" />
      <div className="card-body">
        <p>{x.summary}</p>
        <a href={x.link} className="btn btn-primary">
          More information
        </a>
      </div>
    </div>
  ));
};

export default TouristInfoCards;
