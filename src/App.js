import React from "react";
import Bookings from "./Bookings";
import "./App.css";
import Search from "./Search";
import Heading from "./Heading"
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import SearchResults from "./Search";



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
      <Footer contact={contact} />
    </div>
  );
};




export default App;
