import React from "react";
import "./index.css";

var CityCards = [
  {
    city: "Glasgow",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Glasgow_new_montage%2C_2017.jpg/290px-Glasgow_new_montage%2C_2017.jpg",
    url: "http://peoplemakeglasgow.com",
    about: `Welcome to Visit London, your official city guide to London, England. Find things to do in London, days out in London, London attractions and sightseeing, what's on, London events, theatre, tours, restaurants and hotels in London. Plan your trip ...`
  },

  {
    city: "Manchester",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Manchester_Montage_2017.jpg",
    url: "http://visitmanchester.com",
    about: `Welcome to the official tourism site of Greater Manchester where you can search for things to do and find out what's on, as well as getting inspiration for your visit to this fantastic city region.Welcome to the official tourism site of Greater Manchester Welcome to the official tourism site of Greater ...`
  },
  {
    city: "London",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/London_Montage_L.jpg/275px-London_Montage_L.jpg",
    url: "http://visitlondon.com",
    about: `Be a tourist in your own city, explore the diverse neighbourhoods, enjoy a shopping trip and take in the parks of the Dear Green Place - here's how you can safely enjoy your time in Glasgow. `
  }
];

const TouristInfoCards = () => {
  return (
    <div class="allCards">
      {CityCards.map(element => {
        return (
          <div className={element.city}>
            <img src={element.image} className="card-img-top" />
            <div className="card-body">
              <p>{element.about}</p>
              <a href={element.url} className="btn btn-primary">
                Go {element.city}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
