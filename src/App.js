import React from "react";

import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import SearchButton from "./SearchButton";
import TouristInfoCards from "./TouristInfoCards";
import SearchResults from "./SearchResults";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <SearchButton />
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        footer={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
