import React from "react";
import "./App.css";
import Bookings from "./Bookings";
import Footer from "./Footer";
import Heading from "./Heading";
import InfoCards from "./Infocards";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <InfoCards cities={cities} />
      <Bookings />
      <Footer contacts={contacts} />
    </div>
  );
};

const cities = [
  {
    name: "Manchester",
    img:
      "https://i.ibb.co/jRmrgXg/Stock-Photo-of-the-Millenium-Bridge-at-Salford-Quays-in-Manchester-England-at-twilight-blue-hour.jpg",
    alt: "Picture of Manchester",
    link: "https://visitmanchester.com/"
  },
  {
    name: "Glasgow",
    img: "https://i.ibb.co/P187z7q/glasgow.jpg",
    alt: "Picture of Glasgow",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    name: "London",
    img: "https://i.ibb.co/Vm2dxy0/london.jpg",
    alt: "Picture of London",
    link: "https://visitlondon.com/"
  }
];

const contacts = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

export default App;
