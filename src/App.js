import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import SearchResults from "./SearchResults";

import Bookings from "./Bookings";
import "./App.css";

//footer

const footer = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <Bookings />
      <TouristInfoCards cities={cities} />
      <SearchResults />
      <Footer footer={footer} />
    </div>
  );
};

export default App;
