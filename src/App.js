import React, { Component } from "react";

import Header from "./components/Header.js";
import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bookings />
        <Footer />
      </div>
    );
  }
}

export default App;
