import React from "react";
import "./App.css";
import Bookings from "./Bookings";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfocards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards cities={cities} />
    </div>
  );
};

const cities = [
  {
    name: "Glasgow",
    img: "https://i.ibb.co/njxmF0T/glasgow.jpg",
    alt: "Picture of Glasgow",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    name: "Manchester",
    img:
      "https://i.ibb.co/jRmrgXg/Stock-Photo-of-the-Millenium-Bridge-at-Salford-Quays-in-Manchester-England-at-twilight-blue-hour.jpg",
    alt: "Picture of Manchester",
    link: "https://visitmanchester.com/"
  },
  {
    name: "London",
    img: "https://i.ibb.co/Vm2dxy0/london.jpg",
    alt: "Picture of London",
    link: "https://visitlondon.com/"
  }
];

export default App;
