import React from "react";
import Bookings from "./Bookings";
import SearchResults from "./SearchResults";
import TouristInfoCards from "./card";
import hotel from "./belfry-hotel-logo.png";
import "./App.css";
function Header() {
  return (
    <div>
      <header className="App-header" id="hederHotel">
        <img id="hotel-logo" src={hotel} alt="hotel-Logo" />
        <p id="header-name">CYF Hotel</p>
      </header>
    </div>
  );
}
function Footer() {
  const details = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div>
      <ul>
        {details.map(element => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}
const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      {/* <SearchResults /> */}
      <Footer />
    </div>
  );
};

export default App;
