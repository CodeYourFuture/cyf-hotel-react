import React, { Component } from "react";
import Heading from './Heading'
import TouristInfoCards from './TouristInfoCards'
import Bookings from "./Bookings";
import Footer from './Footer'
import Restaurant from "./Restaurant";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="bookings-restaurant-container">
        <div className="Ap">
          <Heading />
          <div>
            <TouristInfoCards className="App-content" />
            <Bookings />
            <Restaurant />
            <Footer footerData={["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
