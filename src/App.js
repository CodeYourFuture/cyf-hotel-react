import React, { Component } from "react";
import TouristInfoCards from './TouristInfoCards';
import TouristInfoData from "./data/TouristInfoData.json"
import Heading from './Heading'
import Bookings from "./Bookings";
import Footer from './Footer'
import "./App.css";
//import Restaurant from "./Restaurant";

class App extends Component {
  render() {
    return (

      <div className="App">
        <Heading />
        <TouristInfoCards cardColClass={"card col-md-3 offset-md-1 border-dark"} data={TouristInfoData} />
        <Bookings />
        <Footer address={["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]}/>

      </div>
    );
  }
}

export default App;
