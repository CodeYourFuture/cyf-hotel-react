import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <TouristInfoCards />
        <div className="input-search">
          <Bookings />
          <Restaurant />
          
        </div>
        <Footer
          footerArray={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789"
          ]}
        />
      </div>
    );
  }
}

export default App;
