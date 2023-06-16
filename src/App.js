import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards"
import Footer from "./Footer";
import SearchResults from "./SearchResults";


const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <SearchResults />
      <Footer />
    </div>
  );
};

export default App;
