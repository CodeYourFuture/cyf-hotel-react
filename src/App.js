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
        <div className="cardsContainer">
          <TouristInfoCards
            image="https://i.ytimg.com/vi/c8Sa0l98UB4/maxresdefault.jpg"
            city="London"
            link="http:/www.visitlondon.com"
          />
          <TouristInfoCards
            image="https://www.visitbritain.org/sites/default/files/styles/large/public/vb-corporate/Images/basic-page/top-attractions-500x200_0.jpg?itok=eA8FDRfQ"
            city="Manchester"
            link="visitmanchester.com"
          />
          <TouristInfoCards
            image="https://www.glasgowmackintosh.com/images/uploads/attractions/kelvingrove/Kelvingrove1.jpg"
            city="Glasgow"
            link="peoplemakeglasgow.com"
          />
        </div>
        <Bookings />
        <Restaurant />
        <Footer
          array={[
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
