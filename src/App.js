import React from "react";
import { Header } from "./Header";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
import { SearchResults } from "./SearchResults";
import { Footer } from "./Footer";
import { Restaurant } from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <SearchResults />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
