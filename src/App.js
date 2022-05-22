import React from "react";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import FakeBookings from "./data/fakeBookings.json";
import cities from "./cities.json";
import "./App.css";
import Restaurant from "./components/Restaurant";
import Bookings from "./components/Bookings.jsx";

const footerData = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      {<TouristInfoCards cities={cities} />}
      <Bookings />
      {<Restaurant />}
      {<Footer footerData={footerData} />}
    </div>
  );
};

export default App;
