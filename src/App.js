import React from "react";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import ManchesterImg from "./Manchester.jpeg";
import LondonImg from "./London.jpeg";
import GlasgowImg from "./Glasgow.jpeg";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./App.css";

const touristInfoData = [
  {
    city: "Manchester",
    url: "https://www.visitmanchester.com/",
    img: ManchesterImg,
    cardtext:
      "Manchester city centre is jam-packed with unique and eclectic restaurants, bars, shops, museums, galleries, hotels and places to stay whilst the surrounding Greater Manchester boroughs offer a patch-work of visitor experiences including quaint market towns, traditional pubs and beautiful green spaces and waterways to be explored on foot or bike. "
  },
  {
    city: "London",
    url: "https://visitlondon.com/",
    img: LondonImg,
    cardtext:
      "Discover the best of London with Visit London, the official guide to England’s exciting capital. Find things to do in London, from iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events."
  },
  {
    city: "Glasgow",
    url: "https://peoplemakeglasgow.com/",
    img: GlasgowImg,
    cardtext:
      "Glasgow grew from a small rural settlement on the River Clyde to become the largest seaport in Scotland, and tenth largest by tonnage in Britain. Expanding from the medieval bishopric and royal burgh, and the later establishment of the University of Glasgow in the 15th century."
  }
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cardWrapper">
        {touristInfoData.map(touristInfo => (
          <TouristInfoCards
            key={touristInfo.city}
            city={touristInfo.city}
            url={touristInfo.url}
            img={touristInfo.img}
            cardtext={touristInfo.cardtext}
          />
        ))}
      </div>
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
