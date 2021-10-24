import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import SearchButton from "./SearchButton";
import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import SearchResults from "./SearchResults";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
      <Restaurant />
      <SearchButton />
      <TouristInfoCards />

      <Footer />
    </div>
  );
};

export default App;
