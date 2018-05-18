import React, { Component } from "react";
import BookingCounter from "./components/BookingCounter.js";
import TestingComponent from "./components/TestingComponent.js";
import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import CheckList from "./components/CheckList.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <Bookings />
        <CheckList />
        <BookingCounter buttonName="click me " />
        <BookingCounter buttonName="second button " />
        <TestingComponent
          name="Nate"
          hobbies="tv"
          counterName="Nates Counter"
        />
        <TestingComponent
          name="Rukmini"
          hobbies="coffee"
          counterName="Rukminis Counter"
        />

        {/* <h1 id="hello"> hello react </h1> */}
        <Footer />
      </div>
    );
  }
}

export default App;
