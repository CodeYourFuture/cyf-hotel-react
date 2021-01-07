import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCard from "./TouristInfoCard";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const cards = [
  {
    city: "Glasgow",
    link: "http://peoplemakeglasgow.com",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Glasgow_new_montage%2C_2017.jpg"
  },
  {
    city: "Manchester",
    link: "http://visitmanchester.com",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Manchester_Montage_2017.jpg"
  },
  {
    city: "London",
    link: "http://visitlondon.com",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg"
  }
];

const contact = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard cards={cards} />
      <Bookings />
      <Restaurant />
      <Footer contact={contact} />
    </div>
  );
};

export default App;
