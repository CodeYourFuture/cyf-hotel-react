import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading.js";
import TouristInfoCards from "./components/TouristInfoCards.js";
import Footer from "./components/Footer.js";
import Restaurant from "./Restaurant.js";

const contactDetail = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const cards = [
  {
    city: "Glasgow",
    link: "https://peoplemakeglasgow.com/",
    img:
      "https://cdn.pixabay.com/photo/2015/09/27/17/03/secc-961001_960_720.jpg"
  },
  {
    city: "Manchester",
    link: "https://www.visitmanchester.com/",
    img:
      "https://cdn.pixabay.com/photo/2014/02/09/23/25/manchester-263210_960_720.jpg"
  },
  {
    city: "London",
    link: "https://visitlondon.com/",
    img:
      "https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853_960_720.jpg"
  }
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards cards={cards} />
      <Bookings />
      <Restaurant />
      <Footer contactDetail={contactDetail} />
    </div>
  );
};

export default App;
