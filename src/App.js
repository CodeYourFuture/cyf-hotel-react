import React, { Component } from "react";

import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import Logo from "./components/Logo.js";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <Bookings />
        <p>
          there are bookings available for {new Date().toLocaleDateString()}
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;