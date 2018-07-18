import React, { Component } from "react";

import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import Logo from "./components/Logo.js";
import SpecialDeals from "./components/SpecialDeals.js";
import BookingsMessage from "./components/BookingsMessage.js";
import Counter from "./components/Counter.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo title="Welcome to CYF Hotel" />
        <BookingsMessage />
        <SpecialDeals />
        <Bookings />
        <Footer /> <Counter name="Like us" />
      </div>
    );
  }
}

export default App;
