import React from "react";
import SearchButton from "./SearchButton.js";
import Heading from "./Heading.js";
import TouristInfoCard from "./TouristInfoCards.js";
import Footer from "./Footer.js";
import Restaurant from "./Restaurant.js";

// import SearchResults from "./SearchResults.js";

import Bookings from "./Bookings.js";
import "./App.css";

const FakeDetails = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCard />
      <Bookings />
      {/* <SearchResults /> */}
      <Restaurant />

      <SearchButton />
      <Footer FakeDetails={FakeDetails} />
    </div>
  );
};

export default App;
