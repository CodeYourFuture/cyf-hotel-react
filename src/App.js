import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import "./App.css";

const App = () => {
  const cards = [
    {
      city: "Glasgow",
      img: "./images/Glasgow.jpeg",
      link: "https://peoplemakeglasgow.com"
    },
    {
      city: "Manchester",
      img: "./images/Manchester.jpeg",
      link: "https://visitmanchester.com"
    },
    {
      city: "London",
      img: "./images/London.jpeg",
      link: "https://visitlondon.com"
    }
  ];
  const footer = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards cards={cards} />
      <Footer footer={footer} />
    </div>
  );
};

export default App;
