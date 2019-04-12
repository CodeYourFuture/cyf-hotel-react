import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from './TouristInfoCards';
import TouristInfoCardsData from './data/touristInfoCardsData.json';
import Footer from './Footer';
import "./App.css";
import "./grid.css";

class App extends Component {
  render() {
    const contactInfo = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
    return (
      <div className="App">
        <Heading />
        <TouristInfoCards cities={TouristInfoCardsData} />
        <Bookings />
        <Restaurant />
        <Footer contactInfo={contactInfo} />
      </div>
    );
  }
}

export default App;
