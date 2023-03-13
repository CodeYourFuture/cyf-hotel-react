import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

import "./App.css";
import Search from "./Search";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Search></Search>
      <Bookings />
      <Restaurant />

      <Footer
        address={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789",
        ]}
      />
    </div>
  );
};

export default App;
