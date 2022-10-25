import React from "react";
import Heading from "../src/Heading";
import Bookings from "./Bookings";
import "./App.css";
import TouristInfoCards from "./TouristInfoCards";
// import SearchResults from "./SearchResults";
import Footer from "./Footer";

const App = () => {
  const footerInfo = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      {/* <SearchResults /> */}
      <Footer hotelInfos={footerInfo} />
    </div>
  );
};

export default App;
