import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Restaurant from  "./Restaurant"
import SearchResults from "./SearchResults";
import Footer from "./Footer";
import "./App.css";
import Order from "./Order";

const App = () => {

  return (
    <div className="App">
      <header className="header">CYF Hotel</header>
      <Heading />
      <Bookings />
      <TouristInfoCards />
      <Restaurant/>
      <SearchResults />
      <Order/>
      <Footer />
    </div>
  );
};
export default App();