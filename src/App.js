import React, { Component } from "react";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading"
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";


class App extends Component {
  render() {
    const contactInfo = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
    ];
   return (
    <div className="App">
      <div className="container">
        <Heading />
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
       <Footer contactInfo={contactInfo} />
      </div>
    </div>
    );
  }
}
export default App;
