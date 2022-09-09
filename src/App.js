import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Heading from "./Heading";
import Footer from "./Footer";
import Restaurant from "./Restaurant";
import "./App.css";

const App = () => {
  const cards = [
    {
      city: "Glasgow",
      img: "./images/Glasgow.jpeg",
      alt: "Glasgow",
      link: "https://peoplemakeglasgow.com"
    },
    {
      city: "Manchester",
      img: "./images/Manchester.jpeg",
      alt: "Manchester",
      link: "https://visitmanchester.com"
    },
    {
      city: "London",
      img: "./images/London.jpeg",
      alt: "London",
      link: "https://visitlondon.com"
    }
  ];
  const footer = [
    "Address : 123 Fake Street, London, E1 4UD",
    "Email : hello@fakehotel.com",
    "Tel : 0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cards={cards} />
      <Bookings />
      <Restaurant />
      <Footer footer={footer} />
    </div>
  );
};

export default App;
