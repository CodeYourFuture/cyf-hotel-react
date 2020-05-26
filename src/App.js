import React from "react";
import Heading from "./Componants/Heading";
import TouristInfoCards from "./Componants/TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Componants/Footer";
// import SearchResults from "./Componants/SearchResults"

const App = () => {
  let contact = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
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
