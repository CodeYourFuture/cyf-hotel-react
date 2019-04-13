//<link rel="stylesheet" href="https://getbootstrap.com/docs/4.2/components/card"></link>
import React, { Component } from "react";
import Heading from "./Heading";
//import TouristsInfoCards from "./TouristsInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";

import "./App.css";

const footerContent = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Bookings />
        <Restaurant />
        <Footer names = {footerContent} />
        
      </div>
    );
  }
}

export default App;
