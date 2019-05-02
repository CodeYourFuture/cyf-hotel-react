import React, { Component } from "react";


import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <header className="App-header">CYF Hotel</header>

        <Bookings />
        <Restaurant />
        <TouristInfoCards
          image="https://i.postimg.cc/X7tt3Vd0/ugur-akdemir-473717-unsplash.jpg"
          city="London"
          link="https://www.visitlondon.com"
        />
        <TouristInfoCards
          image="https://www.glasgowmackintosh.com/images/uploads/attractions/kelvingrove/Kelvingrove1.jpg"
          city="Glasgow"
          link="https://peoplemakeglasgow.com/"
        />
        <TouristInfoCards
          image="https://www.visitbritain.org/sites/default/files/styles/large/public/vb-corporate/Images/basic-page/top-attractions-500x200_0.jpg?itok=eA8FDRfQ"
          city="Mancester"
          link="visitmanchester.com"
        />

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
