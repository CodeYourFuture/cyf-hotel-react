import React from "react";
import Header from "./Header"
import TouristInfoCards from "./TouristInfoCards"
import Footer from "./Footer"
import Restaurant from "./Restaurant"
//import SearchResults from "./SearchResults"

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer data = {["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]}/>
    </div>
  );
};

export default App;
