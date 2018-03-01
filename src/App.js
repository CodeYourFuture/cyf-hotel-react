import React, { Component } from "react";

import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import "./App.css";
import SearchButton from "./components/SearchButton";
import SearchByIdResult from "./components/SearchByIdResult"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <Bookings />
        <Footer />
        <SearchButton/>
        <SearchByIdResult/>
        
      </div>
    );
  }
}

export default App;
