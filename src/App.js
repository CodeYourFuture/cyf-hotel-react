import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Footer from "./Footer";

import Restaurant from "./Restaurant";
const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="container">
        <TouristInfoCards />
      </div>

      <Bookings />

      <div className="container">
        <Restaurant />
      </div>
      <div>
        <Footer
          contact={[
            "123 Fake Street, London, E1 4UD",
            "hello@fakehotel.com",
            "0123 456789"
          ]}
        />
      </div>
    </div>
  );
};

export default App;
