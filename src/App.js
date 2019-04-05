import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./components/Heading/Heading";
import TouristInfoCards from "./components/TouristInfoCards/TouristInfoCards";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
        <Footer />
      </div>
    );
  }
}

export default App;
