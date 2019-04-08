import React, { Component } from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from './TouristInfoCards';
import Footer from './Footer';
import "./App.css";
import "./grid.css";

class App extends Component {
  render() {
    const contactInfo = ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"];
    const location1 = {
      name: 'London',
      imageSource: 'https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg',
      link: 'https://www.visitlondon.com/'
    };

    const location2 = {
      name: 'Glasgow',
      imageSource: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/E213/production/_90057875_mediaitem90057873.jpg',
      link: 'https://peoplemakeglasgow.com/'
    };

    const location3 = {
      name: 'Manchester',
      imageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1u2v3Poqi8gSsKb4C3nIXBpPQtSYdMbLjLDg5Aq2lMbl_R7xyw',
      link: 'https://www.visitmanchester.com/'
    };

    const locations = [location1, location2, location3];

    return (
      <div className="App">
        <Heading />
        <TouristInfoCards cities={locations} />
        <Bookings />
        <Restaurant />
        <Footer contactInfo={contactInfo} />
      </div>
    );
  }
}

export default App;
