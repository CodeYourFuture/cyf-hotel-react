import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Bookings />
        <Restaurant />
        <TouristInfoCards />
        <Footer />
      </div>
    );
  }
}

export default App;
