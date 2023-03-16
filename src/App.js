import React from "react";
import Bookings from "./Bookings";
import SearchResults from "./SearchResults";
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
import Heading  from "./Heading";
import Restaurant from "./Restaurant";
import "./App.css";

// what is key about...


const App = () => {
  const contact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789",
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer contact={contact} />
    </div>
  );
};

export default App;
