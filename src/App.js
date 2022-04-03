import React from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import Bookings from "./components/Bookings";
import TouristInfoCards from "./components/TouristInfoCards";
import Restaurant from "./components/Restaurant";

import "./App.css";

// move to footer?
const contact = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => {
  return (
    <>
      <div className="App">
        <Heading />
        <TouristInfoCards />
        <Bookings />
        <Restaurant />
        <Footer contacts={contact} />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default App;
