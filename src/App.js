import React from "react";

import Bookings from "./Bookings";
import { Restaurant } from "./Restaurant";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";
import SearchResults from "./SearchResults";

class App extends React.Component {
  render() {
    const footerInfo = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
    ];
    return (
      <div className="App">
        <Heading />
        <Bookings />
        <TouristInfoCards />
        <Restaurant />
        <Footer contactInfo={footerInfo} />
      </div>
    );
  }
}

export default App;
