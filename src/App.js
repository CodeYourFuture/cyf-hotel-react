import React, { Component } from "react";
import Heading from './components/Heading'
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import "./App.css";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Bookings />
        <Restaurant />
        <div className="card">
          <TouristInfoCards src="1" alt="London" city="London" />
          <TouristInfoCards src="2" alt="Manchester" city="Manchester" />
          <TouristInfoCards src="3" alt="Glasgow" city="Glasgow" />
        </div>
        <Footer
          data={[
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
