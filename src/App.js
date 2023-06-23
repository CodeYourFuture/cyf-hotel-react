import React from "react";
import Heading from "./Heading";
import Bookings from "./Bookings";

import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";
import "./App.css";
import Restaurant from "./Restaurant";

const address = [
  " Address- 123 Fake Street, London, E1 4UD",
  " E-mail-hello@fakehotel.com",
  " Tel- 0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <div>
        <TouristInfoCards />
      </div>
      <Bookings />
      <Restaurant />
      <Footer address={address} />
    </div>
  );
};

export default App;
