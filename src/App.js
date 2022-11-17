import React from "react";
import Footer from "./footer";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import "./App.css";

const contactDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Heading = () => {
  return (
    <div>
      <header className="App-header">
        <img
          className="App-logo"
          src={require("./CYF_Hotel-logo.png")}
          alt="CYF hotel logo"
        />
        CYF Hotel
      </header>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer contact={contactDetails} />
    </div>
  );
};

export default App;
