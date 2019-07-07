import React, { Component } from "react";

import Bookings from "./Bookings";
import Footer from "./Footer";
import Heading from "./Heading"
import Restaurant from "./Restaurant";
import TouristInfoCards from "./TouristInfoCards";

//import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
        <Footer businessInfo = {["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]} />
      </div>
    );
  }
}

export default App;
