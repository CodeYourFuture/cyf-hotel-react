import React from "react";

import Header from "./Header";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Footer from "./Footer";
import BookingData from "./data/fakeBookings.json";

import "./App.css";
import SearchResults from "./SearchResults";

const App = () => {
  return (
    <div className="App">
      <Header />

      <Bookings />
      <TouristInfoCards />
      <SearchResults bookings={BookingData} />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
