import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Heading.";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Bookings />
        <Restaurant />
      </div>
    );
  }
}

export default App;
