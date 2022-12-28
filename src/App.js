import React from "react";
// import Header from "./components/Header";
// import Bookings from "./components/Bookings";
// import TouristInfoCards from "./components/TouristInfoCards";
// import Footer from "./components/Footer";
import {
  Header,
  Bookings,
  TouristInfoCards,
  Footer,
  Restaurant
} from "./components";

import "./App.css";

const footerArray = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer footArray={footerArray} />
    </div>
  );
};

export default App;
