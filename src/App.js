import React, { Component } from "react";

import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import Logo from "./components/Logo.js";
import BookingsMessage from "./components/BookingsMessage.js";
import SpecialDeals from "./components/SpecialDeals.js";
import "./App.css";
import BookingCounter from "./components/BookingCounter.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <BookingsMessage />
        <Bookings />
        <BookingCounter name={"Great Deal"} />
        <BookingCounter name={"Special Offer"} />
        <SpecialDeals />
        <Footer />
      </div>
    );
  }
}

export default App;
