import React from "react";

import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Bookings from "./Bookings";
import "./App.css";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer
        addressInfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
