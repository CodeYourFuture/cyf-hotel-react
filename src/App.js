import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Component/Heading";
import TouristInfoCards from "./UI/TouristInfoCards";
import Footer from "./Component/Footer";
// import SearchResults from "./Component/SearchResults/SearchResults";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      {/* <SearchResults /> */}
      <Footer />
    </div>
  );
};

export default App;
