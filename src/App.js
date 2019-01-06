import React, { Component } from "react";

import Bookings from "./Bookings.js";
import Footer from "./Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <Bookings />
        <Footer />
      </div>
    );
  }
}

export default App;
