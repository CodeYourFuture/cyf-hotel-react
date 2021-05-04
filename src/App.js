import React from "react";
import Header from "./header";
import TouristInfoCards from "./Touristinfocards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./footer";
import "./App.css";
let footDetails = [
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
      <Footer feet={footDetails} />
    </div>
  );
};

export default App;
