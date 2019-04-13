import React, { Component } from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import Heading from "./Heading";
import ReactDOM from "react-dom";
import Footer from "./Footer"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">CYF Hotel</header>
        <Heading />
        
        <TouristInfoCards />
        <Bookings />
        <Restaurant />

        <Footer
          Details={[
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
